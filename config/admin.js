module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7fffed9f903625ad60d922ad1992fa6f'),
  },
});
