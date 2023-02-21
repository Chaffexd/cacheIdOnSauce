describe('Login', async() => {
    it('should navigate to url and confirm title', async() => {
        await browser.url("https://the-internet.herokuapp.com/");
        console.log(await browser.getTitle());
        // should return The Internet
    });
    it('select login page and logs in', async() => {
        const link = await $('=Form Authentication');
        link.click();

        const username = await $('#username');
        const password = await $('#password');
        
        await username.click();
        await username.setValue('tomsmith');
        await password.click();
        await password.setValue('SuperSecretPassword!');

        const button = await $('//*[@id="login"]/button');
        await button.click();
        
        await browser.pause(10000);
    });
    it('confirms we logged in', async() => {
        const successBanner = await $('#flash');
        await expect(successBanner).toBePresent();
    });
});