FROM oven/bun:latest

# Set environment to development so devDependencies are installed
ENV NODE_ENV=development

WORKDIR /app

COPY package.json ./

RUN bun install

COPY . .

EXPOSE 5173

CMD ["bun", "run", "dev", "--host"]