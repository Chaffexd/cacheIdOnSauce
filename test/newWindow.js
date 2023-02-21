describe('Simple web test', () => {
    it('should navigate to site and do something', async() => {
        try {
            await browser.url(`https://saucelabs.com/`);
            
            // await browser.pause(30000);
            
        } catch (error) {
            console.log(error);
        }

    });

    it('should open a new tab', async () => {
        await browser.url('https://google.com');
        console.log(await browser.getTitle()); // outputs: "Google"
    
        await browser.newWindow('https://webdriver.io', {
            windowName: 'WebdriverIO window',
            windowFeature: 'width=420,height=230,resizable,scrollbars=yes,status=1',
        })
        console.log(await browser.getTitle()); // outputs: "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
    
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await browser.pause(10000);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
        console.log(await browser.getTitle()); // outputs: "Google"
    });

    it('opens a new tab', async() => {
        await browser.url('https://the-internet.herokuapp.com/');
        const link = await $('=Elemental Selenium');
        await link.click();
        await browser.pause(10000);
        const moreHandles = await browser.getWindowHandles();
        await browser.switchToWindow(moreHandles[1]);
        console.log(await browser.getTitle()); // outputs: "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"
    });
});

