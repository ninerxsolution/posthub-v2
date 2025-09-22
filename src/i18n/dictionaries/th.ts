export const th = {
  site: {
    title: "PostHub"
  },
  nav: {
    home: "หน้าหลัก",
    posts: "โพสต์",
    about: "เกี่ยวกับ",
    contact: "ติดต่อ",
    language: "ภาษา",
    theme: "ธีม"
  },
  footer: {
    copyright: "สงวนลิขสิทธิ์",
    privacy: "ความเป็นส่วนตัว",
    terms: "เงื่อนไข",
    contact: "ติดต่อ",
    about: "เกี่ยวกับ"
  },
  notFound: {
    code: "404",
    title: "ไม่พบหน้านี้",
    description: "ไม่พบหน้าที่คุณค้นหาหรือหน้านี้ถูกย้ายแล้ว",
    backHome: "กลับหน้าหลัก"
  },
  home: {
    hello: "สวัสดี หน้าแรก"
  },
  about: {
    hello: "สวัสดี เกี่ยวกับ"
  },
  contact: {
    hello: "สวัสดี ติดต่อ"
  }
} as const;

export type ThDict = typeof th;


