import cloudinarys from 'cloudinary';
const cloudinary = cloudinarys.v2;

// CLOUDINARY_API_KEY=526381246949595
// CLOUDINARY_API_SECRET=bmm7VeP5RbmJ4EhykFutGCTMKkw
// CLOUDINARY_CLOUD_NAME=dau0f5wzn

cloudinary.config({
    cloud_name: "dau0f5wzn",
    api_key: "526381246949595",
    api_secret: "bmm7VeP5RbmJ4EhykFutGCTMKkw",
})

export default cloudinary;