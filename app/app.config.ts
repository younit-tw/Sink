export default defineAppConfig({
  title: 'Sink',
  email: 'sink.cool@miantiao.me',
  github: 'https://github.com/ccbikai/sink',
  twitter: 'https://sink.cool/kai',
  telegram: 'https://sink.cool/telegram',
  mastodon: 'https://sink.cool/mastodon',
  blog: 'https://sink.cool/blog',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[\p{Script=Han}a-zA-Z0-9]+(?:-[\p{Script=Han}a-zA-Z0-9]+)*$/u,
  reserveSlug: [
    'dashboard',
  ],
})
