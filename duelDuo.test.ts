
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
}),

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('clicking draw button displays id choices', async () => {
    const draw = await driver.findElement(By.id('draw'))
    
    await draw.click();

    await driver.sleep(3000)
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(6000)

})

test('Add to Duo button displays the player-id', async () => {
    await driver.navigate().refresh()
    
    const draw = await driver.findElement(By.id('draw'))
    await draw.click()
    const choices = await driver.findElement(By.id('choices'))
    
    const addBtn = await choices.findElement(By.className('button'))
   
    await addBtn.click()

    await driver.sleep(3000)
    
    const displays = await driver.findElement(By.id('player-duo'))
    
    expect(displays).toBe(true)

})