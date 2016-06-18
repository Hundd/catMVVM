
function WebmailViewModel() {
    // Data
    self = this;

    self.cats = ko.observableArray([
		{
			name: 'Sam',
			clicks: 0,
			img: "../catClickerMy/img/cat1.jpg"
		},
		{
			name: 'Bob',
			clicks: 0,
			img: "../catClickerMy/img/cat2.jpg"
		},
		{
			name: 'Marta',
			clicks: 0,
			img: "../catClickerMy/img/cat3.jpg"
		},
		{	
			name: 'Penny',
			clicks: 0,
			img: "../catClickerMy/img/cat4.jpg"
		}
	]);

    self.catName = ko.observable(self.cats()[0].name);
    self.clickCount=ko.observable(0);
    self.imgSrc=ko.observable(self.cats()[0].img);
    self.imgAttr = ko.computed(function () {
    	return {
    		src: self.imgSrc(),
    		style: "max-width: 200px;"
    	};
    });


    self.incrementCounter = function () {
    	 self.clickCount(self.clickCount()+1);
    	 self.imgSrc(self.cats()[self.clickCount()%4].img);

    };

   	self.liClick = function () {
   		console.log(this);
   	};

};

ko.applyBindings(new WebmailViewModel());