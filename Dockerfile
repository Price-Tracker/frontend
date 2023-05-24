FROM node:lts as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive

COPY . .

RUN npx nuxt build

FROM node:lts

WORKDIR /app

COPY --from=builder /app .

ENV API_BASE_URL https://elxreno.me/api
ENV HOST 0.0.0.0
ENV PORT 80
ENV NODE_ENV production

EXPOSE 80

CMD ["npx", "nuxt", "start"]