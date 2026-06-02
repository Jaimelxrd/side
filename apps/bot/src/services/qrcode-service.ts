import QRCode from "qrcode"

const BASE_URL = process.env.BASE_URL || "http://localhost:3000"

export async function generateEventQRCode(slug: string): Promise<string> {
  const url = `${BASE_URL}/e/${slug}`

  // Gera o QR Code como base64 (imagem PNG)
  const qrCodeBase64 = await QRCode.toDataURL(url, {
    width: 400,
    margin: 2,
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
  })

  return qrCodeBase64
}

export async function generateEventQRCodeBuffer(slug: string): Promise<Buffer> {
  const url = `${BASE_URL}/e/${slug}`

  // Gera o QR Code como buffer PNG (para download)
  const buffer = await QRCode.toBuffer(url, {
    width: 400,
    margin: 2,
  })

  return buffer
}