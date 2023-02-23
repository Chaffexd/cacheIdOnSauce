describe('Login', async() => {
    it('should navigate to url and confirm title', async() => {
        await browser.url("https://the-internet.herokuapp.com/");
        console.log(await browser.getTitle());
        // should return The Internet
    });
    it('confirms fields are present', async () => {
        const link = await $('=Form Authentication');
        link.click();
        await browser.pause(10000);

        const username = await $('#username');
        const password = await $('#password');

        
        await expect(username).toBePresent();
        await expect(password).toBePresent();
    });
    it('select login page and logs in', async() => {
        const username = await $('#username');
        const password = await $('#password');
        
        await browser.pause(2000);
        await username.click();
        await username.setValue('tomsmith');
        await browser.pause(2000);
        await password.click();
        await password.setValue('SuperSecretPassword!');

        const button = await $('//*[@id="login"]/button');
        await browser.pause(10000);
        await button.click();
        
    });
    it('confirms we logged in', async() => {
        const successBanner = await $('#flash');
        await expect(successBanner).toBePresent();
    });
});