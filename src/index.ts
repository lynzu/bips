import { launch } from '@cloudflare/playwright';
import { expect } from '@cloudflare/playwright/test';
import fs from '@cloudflare/playwright/fs';

export default {
  async fetch(request: Request, env: Env) {
    const { searchParams } = new URL(request.url);
    
    const browser = await launch(env.MYBROWSER);
    const page = await browser.newPage();

    
    await page.goto('https://app.shinigami.asia');

    
      const img = await page.screenshot();
      await browser.close();

      return new Response(img, {
        headers: {
          'Content-Type': 'image/png',
        },
      });
    
  },
};
