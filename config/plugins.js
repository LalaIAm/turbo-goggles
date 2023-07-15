module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  documentation: {
    enabled: true,
    config: {
      openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "TradeMe API",
        description: "A bartering API",
        termsOfService: "",
        contact: {
          name: "LalaIAm",
          email: "lthorud12@gmail.com",
          url: "https://github.com/lalaiam",
        },
        licenses: {
          name: "Apache 2.0",
          url: "https://www.apache.org/licenses/LICENSE-2.0.html",
        },
      },
      "x-strapi-config": {
        plugins: ["upload", "users-permissions"],
        path: "/documentation",
      },
      servers: [
        { url: "http://localhost:1337/api", description: "Local Dev Server" },
        { url: "admin--trade-server--wbl2nxkv68w7.code.run/api", description: 'Web Server' },
      ],
      security: [{ bearerAuth: [] }],
    },
  },
});