import React, {Component} from 'react';
import {
    Container, Row, Column, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';

import {CartContext} from '../contexts/Cart';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [{
                "id": "c38b8d93-097f-45ae-80f3-28e8eb0541a7",
                "name": "Fib N9 - Prague Powder",
                "description": "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
            }, {
                "id": "cf7a6943-e62e-4ee1-955e-5628ac61a515",
                "name": "Sour Cream",
                "description": "justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio",
                "imageUrl": "http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"
            }, {
                "id": "5e8dcbac-63fb-4c47-80aa-bb74f7c1d8af",
                "name": "Chambord Royal",
                "description": "congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "4891fa54-5a57-4e01-9b0a-f79ff29087d9",
                "name": "Mountain Dew",
                "description": "sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "a09fa1fe-a53f-4475-aba3-af6fa4385030",
                "name": "Puree - Blackcurrant",
                "description": "enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
            }, {
                "id": "0d7a0511-78d4-46bf-9465-eef7090be6a9",
                "name": "Wine - Guy Sage Touraine",
                "description": "libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "c2204eb6-d87c-49ed-bbbe-8b3d31fc893d",
                "name": "Beef - Kobe Striploin",
                "description": "vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
            }, {
                "id": "0fdaeb23-b64e-4524-926b-a74e9487edee",
                "name": "Port - 74 Brights",
                "description": "pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
            }, {
                "id": "87cacdbc-e7dc-4def-b72d-17ac366c80b9",
                "name": "Eggplant - Regular",
                "description": "sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
            }, {
                "id": "b82c829a-5049-4cd9-9d08-f4ed56d41c58",
                "name": "Bread - Sour Sticks With Onion",
                "description": "felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "35de98c5-1dbe-41cd-90d4-5bcdea203b1a",
                "name": "Tuna - Salad Premix",
                "description": "volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
            }, {
                "id": "9f3b7990-ce8b-401a-9c3b-d842e6ee612f",
                "name": "Bread Ww Cluster",
                "description": "ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
            }, {
                "id": "79c07a78-ac10-4378-9eca-d85b14075ed6",
                "name": "Skirt - 29 Foot",
                "description": "elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
            }, {
                "id": "37791700-c408-4596-9bba-605a4f2fd37f",
                "name": "Wine - Acient Coast Caberne",
                "description": "molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
            }, {
                "id": "cb2b2072-9ef8-4054-950b-6a7869c98754",
                "name": "Chocolate - Compound Coating",
                "description": "in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "2e70dc92-5c70-4fdf-87ac-85cc763db087",
                "name": "Cheese - Havarti, Salsa",
                "description": "curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "c32e11f4-1296-4d48-8271-41d1e7528c7f",
                "name": "Table Cloth 90x90 Colour",
                "description": "luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
            }, {
                "id": "1d827962-b6e2-4f16-b799-889277b5e817",
                "name": "Cleaner - Bleach",
                "description": "donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "8b9c9cec-3f60-4e45-a700-0c27769db50b",
                "name": "Crab Meat Claw Pasteurise",
                "description": "tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
            }, {
                "id": "cc5924fe-7194-417a-8f5d-174c175a7c2c",
                "name": "Shrimp - 21/25, Peel And Deviened",
                "description": "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
            }, {
                "id": "b6152874-e06a-4c4a-abd9-384a6b180826",
                "name": "Sprite - 355 Ml",
                "description": "nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
            }, {
                "id": "1eeb77cb-b7bd-437b-a222-25260155eb8a",
                "name": "Sauce - Bernaise, Mix",
                "description": "at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
            }, {
                "id": "d79487a3-a9d3-4d8e-9838-44d0f30f3a97",
                "name": "Huck Towels White",
                "description": "lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "b27fa4e1-6004-46f8-b33e-4c6b0827c93a",
                "name": "Pepper - Chillies, Crushed",
                "description": "imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "239d8d1f-791b-410a-8f64-79b649db0d47",
                "name": "Beef - Inside Round",
                "description": "feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse",
                "imageUrl": "http://dummyimage.com/300x200.png/dddddd/000000"
            }, {
                "id": "55e12d82-6793-413d-9ce0-0a0c63bafaf3",
                "name": "Pasta - Cheese / Spinach Bauletti",
                "description": "amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
            }, {
                "id": "76eed2c0-127f-4e14-b29b-fec7248a72b8",
                "name": "Cheese - Cottage Cheese",
                "description": "mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
            }, {
                "id": "bfec98c0-13fb-4790-826d-18e9ae52f670",
                "name": "Sea Bass - Fillets",
                "description": "maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
            }, {
                "id": "dcb0f1b9-1559-4c09-bbad-83670518587e",
                "name": "Beef - Ground, Extra Lean, Fresh",
                "description": "non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
            }, {
                "id": "e17a1b2a-0786-4151-8704-0dfde77b8eb8",
                "name": "Pork - Smoked Kassler",
                "description": "amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
            }, {
                "id": "66132c26-c47e-462c-a21e-920490c965b8",
                "name": "Wiberg Super Cure",
                "description": "arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "f0ed6cfb-a866-4c0c-9ae5-fa72b1c16a56",
                "name": "Puff Pastry - Slab",
                "description": "nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
            }, {
                "id": "be45c1d4-05b3-4cb6-acbc-18b3531f649d",
                "name": "Hinge W Undercut",
                "description": "nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
            }, {
                "id": "d9aab802-b7e5-4d44-9038-b239172dd245",
                "name": "Nut - Cashews, Whole, Raw",
                "description": "ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "cb1aca15-a52b-486a-bd23-46b52d2d03d7",
                "name": "Tray - 12in Rnd Blk",
                "description": "convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis",
                "imageUrl": "http://dummyimage.com/300x200.png/dddddd/000000"
            }, {
                "id": "32ebbc27-e1fa-44d9-bfbb-f46ecd42230a",
                "name": "Tea - Lemon Green Tea",
                "description": "posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
            }, {
                "id": "6bfe25e9-adb8-4166-bcd8-dc709bb5a305",
                "name": "Sprite, Diet - 355ml",
                "description": "a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "01984eb9-d4c8-4455-8c86-eb57b7e64829",
                "name": "Cleaner - Bleach",
                "description": "dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
            }, {
                "id": "2e771324-de33-4bd0-9e05-d9d5e3c9a51e",
                "name": "Rhubarb",
                "description": "nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
            }, {
                "id": "7f37b6e0-4f3d-44a0-8174-83c12c36a15d",
                "name": "Nut - Hazelnut, Ground, Natural",
                "description": "vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "53e0ddf4-1519-4bfa-bed5-4abb495216c3",
                "name": "Raisin - Golden",
                "description": "id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
            }, {
                "id": "e840d1ee-4643-4c70-873f-9e91015ccd7d",
                "name": "Bacon Strip Precooked",
                "description": "sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "2a508e84-c818-4766-94fa-0843b33db659",
                "name": "Cheese - Ermite Bleu",
                "description": "mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
            }, {
                "id": "bc0f9e4a-b97a-43fe-add9-b809794aa350",
                "name": "Sugar - Splenda Sweetener",
                "description": "orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
            }, {
                "id": "535c49f7-f86d-4170-be8e-240f92fdec7c",
                "name": "Cheese - Brie",
                "description": "in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
            }, {
                "id": "8cb3ccbe-34d2-4805-b910-827df5849087",
                "name": "Wine - Two Oceans Sauvignon",
                "description": "aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
            }, {
                "id": "7621ccd1-ce0a-4a5e-9e52-27d89ddacb6b",
                "name": "Pepper - Scotch Bonnet",
                "description": "ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
            }, {
                "id": "fe4a61f2-6309-4f72-81c8-cd244c48fb38",
                "name": "Basil - Fresh",
                "description": "nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
            }, {
                "id": "778fa3cb-07cc-4d09-b5dd-26dc0868bc06",
                "name": "Flavouring Vanilla Artificial",
                "description": "metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
            }, {
                "id": "383f6539-f49a-4151-86cc-d938443fa7f1",
                "name": "Lettuce - Red Leaf",
                "description": "ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
            }, {
                "id": "5591e1ea-6e26-4720-bf7d-5808697a3470",
                "name": "Pasta - Fettuccine, Egg, Fresh",
                "description": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
            }, {
                "id": "bc1a4bed-cce0-4f66-8e33-91045432a961",
                "name": "Salmon Steak - Cohoe 6 Oz",
                "description": "aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "c244743a-b8ba-4101-9002-5cb68003aa84",
                "name": "Ham - Cooked Italian",
                "description": "justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "f756fd74-3017-40e5-90ed-9c46138866c2",
                "name": "Pumpkin - Seed",
                "description": "lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "f8b7a78b-338f-445e-947c-e8963a29fd7e",
                "name": "Bulgar",
                "description": "pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
            }, {
                "id": "dc39f63b-5466-4262-9a8a-a95696ff721e",
                "name": "Ketchup - Tomato",
                "description": "semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "25b77a78-6142-45ab-a6d6-0920faecb87b",
                "name": "Meldea Green Tea Liquor",
                "description": "adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
            }, {
                "id": "60d86381-8471-4bdc-bb1c-56d93fcd1a6d",
                "name": "Lentils - Green, Dry",
                "description": "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "68f02129-6b84-4ea7-9a65-94163c8ee000",
                "name": "Tomatoes - Vine Ripe, Red",
                "description": "justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "44a58ec9-ee95-4aa1-ba87-c407c052f898",
                "name": "Coffee Cup 12oz 5342cd",
                "description": "donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "37c0abbd-9b31-4043-819d-232a6719db86",
                "name": "Crab - Blue, Frozen",
                "description": "nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
            }, {
                "id": "77f91d9a-30ed-4874-86cf-96d65d661ce1",
                "name": "Cheese - Ermite Bleu",
                "description": "proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
            }, {
                "id": "01779cd3-c314-473b-aae6-7dba5928e4c1",
                "name": "Tuna - Canned, Flaked, Light",
                "description": "eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
            }, {
                "id": "2dba3556-9136-4abb-9785-6b67f3b515e5",
                "name": "Nacho Chips",
                "description": "ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
            }, {
                "id": "a2fe449b-cde0-498a-9f9b-e98cf0384652",
                "name": "Salsify, Organic",
                "description": "sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "321b9bbc-aa7b-40aa-a721-b2f5e1002c6b",
                "name": "Yogurt - French Vanilla",
                "description": "non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
            }, {
                "id": "d01760d2-39a0-4318-8f88-5183409f7e15",
                "name": "Pepper - Sorrano",
                "description": "habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
            }, {
                "id": "5711b1d5-96c7-4614-a34a-fa6c9b5b1753",
                "name": "Bread Base - Gold Formel",
                "description": "nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
            }, {
                "id": "df66e272-507b-49f8-b224-cb001bc9d466",
                "name": "Corn - On The Cob",
                "description": "metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
            }, {
                "id": "05861060-d19c-47a5-9ed9-e566e6eda2af",
                "name": "Spice - Greek 1 Step",
                "description": "ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "2198d1b0-4823-48aa-aa25-bce3fca2c29b",
                "name": "Oil - Olive Bertolli",
                "description": "at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
            }, {
                "id": "0a71cc8e-cb52-4acc-a3fa-a13e31e14716",
                "name": "Flounder - Fresh",
                "description": "justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
            }, {
                "id": "cc83d1b2-4dfa-4b2f-b3b5-4bbd9c14cb3e",
                "name": "Pastry - French Mini Assorted",
                "description": "nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
            }, {
                "id": "53ffa3b7-0021-4797-b0b9-daf12943f888",
                "name": "Sauce - Cranberry",
                "description": "eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
            }, {
                "id": "cbeb6273-8ea7-44a1-ae48-266e489c1238",
                "name": "Sprouts - Bean",
                "description": "justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
            }, {
                "id": "80e5c31f-d3f8-42ce-8d5a-421fbdc3b58d",
                "name": "Veal - Heart",
                "description": "consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
            }, {
                "id": "4ad5d932-67e3-4511-a33a-cf99688c05fa",
                "name": "Cheese - Camembert",
                "description": "iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
            }, {
                "id": "0378376f-64ae-4b85-a815-001cb48fa6ce",
                "name": "Tamarind Paste",
                "description": "in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
            }, {
                "id": "58c2f5d5-34b6-409d-86ab-ae17fcdf6ac5",
                "name": "Sour Puss - Tangerine",
                "description": "elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "359e94e3-6ede-4b6e-abdb-6168591c758a",
                "name": "Wine - Red, Marechal Foch",
                "description": "placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "c286ae0c-88c6-4f63-8342-474870580acc",
                "name": "Pepper - Red, Finger Hot",
                "description": "sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
            }, {
                "id": "15f448b3-27d4-46ec-813f-d67af28118aa",
                "name": "Tea - Mint",
                "description": "dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut",
                "imageUrl": "http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"
            }, {
                "id": "67646be6-6474-493b-86dc-9bc3e6c9ef28",
                "name": "Pastry - Chocolate Chip Muffin",
                "description": "vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
            }, {
                "id": "9c7ec39f-4e1b-4c27-955d-6cbaf459d5a8",
                "name": "Stainless Steel Cleaner Vision",
                "description": "morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "8c0ab66e-4546-4f59-9c11-f89a82c18b4b",
                "name": "Sauce - Black Current, Dry Mix",
                "description": "curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
            }, {
                "id": "eed03538-0f55-4b27-8b47-8cd3da9a4478",
                "name": "Shrimp - 31/40",
                "description": "ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "05335c39-cb77-4c99-9a56-c42526c1858c",
                "name": "Pomello",
                "description": "neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "18c12c67-f256-480f-869d-8f4412da57cf",
                "name": "Ice Cream Bar - Drumstick",
                "description": "turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
            }, {
                "id": "46c09769-740f-4cd6-93af-588f59ed5186",
                "name": "Cheese - St. Andre",
                "description": "erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "8403fc34-ad1f-48c7-ab16-a9800f2754e4",
                "name": "Trout - Rainbow, Frozen",
                "description": "vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "28ac3388-5cb9-4377-b702-028ff8c09f5f",
                "name": "Chocolate - Semi Sweet",
                "description": "iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "b5715a4f-10d8-40f0-93aa-e97dc846ce81",
                "name": "Carbonated Water - Peach",
                "description": "ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi",
                "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
            }, {
                "id": "505793f1-6711-4ab2-88ee-beadc9d331c1",
                "name": "Cookie Dough - Peanut Butter",
                "description": "nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
            }, {
                "id": "710569d6-4134-43da-8f91-5dae5ec38e1d",
                "name": "Syrup - Kahlua Chocolate",
                "description": "tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "485a225a-4e46-4189-80c1-5ff27aa0ca5a",
                "name": "Bagel - Whole White Sesame",
                "description": "justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
            }, {
                "id": "6fba38b5-c7a4-4d88-91b7-5b46abd4d656",
                "name": "Pears - Bosc",
                "description": "luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
            }, {
                "id": "045a3021-9fc2-42bf-b3f2-042052f49914",
                "name": "Guinea Fowl",
                "description": "quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
            }, {
                "id": "c09d8507-c30f-49a5-9db3-bb14fc804909",
                "name": "Chocolate - Dark",
                "description": "in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
            }, {
                "id": "61d3f814-ef46-4592-890c-4ea7a0c9c268",
                "name": "Tuna - Fresh",
                "description": "libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
            }, {
                "id": "04affc0a-c60a-4703-9067-d4e84c7553ee",
                "name": "Table Cloth 53x53 White",
                "description": "vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
            }]
        }
    }

    render() {
        const {products} = this.state;
        return (
            <Container>
                <h2>Products</h2>
                <Row>
                    {products.map(product => (
                        <Col sm="4">
                            <Card>
                                <CardImg top width="100%"
                                         src={product.imageUrl}
                                         alt="Card image cap"/>
                                <CardBody>
                                    <CardTitle>{product.name}</CardTitle>

                                    <CardText>{product.description}</CardText>
                                    <CartContext.Consumer>
                                        {({ addToCart }) => <button onClick={() => addToCart(product)}>Add To Cart</button>}
                                    </CartContext.Consumer>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default Products;
