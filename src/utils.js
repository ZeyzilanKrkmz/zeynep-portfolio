// utils.js

/**
 * Görsel dosya yolunu döner, WebP desteklenmiyorsa fallback formatına geçer.
 * @param {string} filePath - assets klasörü altındaki dosya yolu (örneğin: "about/filename")
 * @param {string} fallbackExt - webp desteklenmiyorsa kullanılacak uzantı (varsayılan: "png")
 * @returns {string} - Tarayıcıya uygun görsel dosya yolu
 */
export function getImageUrl(filePath, fallbackExt = "png") {
  if (typeof filePath !== "string") {
    console.warn("Geçersiz dosya yolu verildi:", filePath);
    return "";
  }

  const supportsWebP =
    typeof window !== "undefined" &&
    document
      .createElement("canvas")
      .toDataURL("image/webp")
      .indexOf("data:image/webp") === 0;

  const ext = supportsWebP ? "webp" : fallbackExt;

  const basePath = "/assets/";

  // Dosya uzantısı varsa kes (örn: ".webp" varsa sil)
  const cleanPath = filePath.replace(/\.[^/.]+$/, "");

  return `${basePath}${cleanPath}.${ext}`;
}


