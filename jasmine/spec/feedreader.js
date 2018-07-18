$(function() {

    describe('RSS Feeds', function() {

         // Test that the allFeeds variable is defined and that it is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });



         // Test that each feed has a URL and that the URL is not empty
         it('has URL', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           })
         })


         // Test that each feed in allFeeds has a name property and that the
         // name property is defined.
         it('has a name', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).toBeGreaterThan(0);
           })
         })
    });


    /* Test suite for 'menu' */

    describe('menu', function() {

       // Test that the menu element is hidden by default
       it('menu hidden by default', function() {
         expect($('body').attr('class')).toBe('menu-hidden')
       })

        /*
          Test that the menu changes visibility when clicked.
          Test that the menu hides when clicked again.
        */
        it('menu visibility changes when clicked', function() {
          var menuIcon = $('.menu-icon-link');
          menuIcon.click();
          expect($('body').hasClass('menu-hidden')).toBe(false);

          menuIcon.click();
          expect($('body').hasClass('menu-hidden')).toBe(true);
        })
    })



    /* Test suite for "Initial Entries" */


         describe('Initial Entries', function() {
           /*
            Test that ensures when loadFeed() is called and completes it work,
            there is at least a single .entry element within the .feed container.
           */
           beforeEach(function(done) {
             loadFeed(0, function() {
               done()
             })
           });

          it('loads initial element', function(done) {
            expect($('.feed').length).toBe(1);
            done();
          })


         })

    /* Test suite "New Feed Selection" */

    describe('New Feed Selection', function() {
       /*
         Test that ensures when a new feed is loaded by the loadFeed(), the
         content actually changes.
       */
      var newFeed, oldFeed;

      beforeEach(function(done) {
        $('.feed').empty();
        loadFeed(0, function() {
          oldFeed = $('.feed').html();
          loadFeed(1, done)
        })
      });

      it('contents changes upon calling loadFeed function', function() {
        newFeed = $('.feed').html();
        expect(oldFeed).not.toBe(newFeed)
      })
    })


}());
