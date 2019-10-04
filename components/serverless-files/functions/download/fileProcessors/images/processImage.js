const sharp = require("sharp");

/**
 * Only processing "width" at the moment.
 * Check "sanitizeImageOptions.js" to allow additional image processing options.
 * @param buffer
 * @param options
 * @returns {Promise<void>}
 */
const processImage = async (buffer, options) => {
    const { width } = options;
    return await sharp(buffer)
        .resize({ width })
        .toBuffer();
};

export default processImage;
