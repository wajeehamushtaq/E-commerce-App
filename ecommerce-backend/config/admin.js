module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b381d93fcf5c5addd4338ad8bea8288b'),
  },
});
