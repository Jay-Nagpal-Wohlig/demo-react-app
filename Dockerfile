# # Build stage
# FROM node:18-alpine as build

# WORKDIR /app

# COPY package*.json ./

# RUN npm ci

# COPY . .

# RUN npm run build

# # Production stage
# FROM nginx:alpine

# COPY --from=build /app/build /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
# Build stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

# Add cache clean before npm ci
RUN npm cache clean --force && npm ci

COPY . .

RUN npm run build