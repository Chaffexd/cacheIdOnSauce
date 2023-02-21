describe('Check if frame is present', () => {
    it('Goes to webpage', async() => {
        await browser.url("https://the-internet.herokuapp.com/nested_frames");
    });
    
    it('Confirms frame is present', async() => {
        // Switches to the second frame
        await browser.switchTo().frame(0);
        await browser.switchTo().frame(2);
        const text = await driver.findElement(By.xpath("/html/body")).getText();
        console.log(text);

        await driver.quit();
    });
});