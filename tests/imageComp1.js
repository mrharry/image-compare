/**
 * Created by stuart1 on 16/06/2016.
 */

module.exports = {
    'My Test': function(browser) {
        browser
            .url('http://www.lombard.co.uk/asset-finance/')
            .compareScreenshot('compare-google-screenshot.png')
            .end();
    }
};
