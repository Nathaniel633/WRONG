// Array for Images
var imageArray = [
    "https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597", // 0
    "https://media.discordapp.net/attachments/944810556622245908/1178596393540137001/image.png?ex=6576b86d&is=6564436d&hm=56929d1de238ae8d364ccf12e0e413853f4f0aa27eaf570d3292904ac851c437&=&format=webp&width=795&height=597", // 1
    "https://media.discordapp.net/attachments/944810556622245908/1178596638726574110/image.png?ex=6576b8a7&is=656443a7&hm=666596241ce4974f2524e5bb2ec605ecf624f19ef9a49007ae3416542cabc8d4&=&format=webp&width=798&height=597", // 2
    "https://media.discordapp.net/attachments/944810556622245908/1178596687078490182/image.png?ex=6576b8b3&is=656443b3&hm=24fb7c9f8d5bf56c0b89ccda4b0f208a494891f431be907107a35fd36db60183&=&format=webp&width=802&height=597", // 3
    "https://media.discordapp.net/attachments/944810556622245908/1178596726463021117/image.png?ex=6576b8bc&is=656443bc&hm=f7bf6076b5350e741c5d1c65f35e7154acc7f46c0851891195c5d92829a22c01&=&format=webp&width=799&height=597", // 4
    "https://media.discordapp.net/attachments/944810556622245908/1178596830423023616/image.png?ex=6576b8d5&is=656443d5&hm=c13ac08d2871b29475d1b5a2d4779592aaea8a25c59d113d74a5607d6fc132a7&=&format=webp&width=799&height=597", // 5
    "https://media.discordapp.net/attachments/944810556622245908/1178596868175954000/image.png?ex=6576b8de&is=656443de&hm=a42fed709f78bcb723f36b0016e7fd0ffdfaad11e386495a65fcdf9a3b674fda&=&format=webp&width=808&height=597", // 6
    "https://media.discordapp.net/attachments/944810556622245908/1178596908801994822/image.png?ex=6576b8e8&is=656443e8&hm=3e3240fe1ebc62bc240035def3d56aa23fed2164da4499021d2383d89ed3ff4d&=&format=webp&width=795&height=597", // 7
    "https://media.discordapp.net/attachments/944810556622245908/1178596947406360627/image.png?ex=6576b8f1&is=656443f1&hm=8e9127a96110f1228bb1ecbe85d620cc9d6a616088cd2b6b6f3587ad31c49505&=&format=webp&width=795&height=597", // 8
    "https://media.discordapp.net/attachments/944810556622245908/1178596991631114310/image.png?ex=6576b8fc&is=656443fc&hm=d54ab69f121052ec498aed09bda4790c7dcea91f1ce419a8c01de490196ae2e0&=&format=webp&width=792&height=597", // 9
    "https://media.discordapp.net/attachments/944810556622245908/1178597033368625212/image.png?ex=6576b906&is=65644406&hm=f76221d8271041fb66c9045d13b012a19d561e9fcdc8632a5a2a441842b0ea42&=&format=webp&width=803&height=597", // 10
    "https://media.discordapp.net/attachments/944810556622245908/1178597074292449300/image.png?ex=6576b90f&is=6564440f&hm=b0c278d2d535d01ad46de3a3711ab7cdf72c1196b08140b59bdea57ebce38c53&=&format=webp&width=801&height=597", // 11
    "https://media.discordapp.net/attachments/944810556622245908/1178597121356742716/image.png?ex=6576b91b&is=6564441b&hm=6921df68186bd79f384f6e9c3ac2ccaba3303d5484158eab6e76cf4f31da4199&=&format=webp&width=796&height=597", // 12
    "https://media.discordapp.net/attachments/944810556622245908/1178597175081574450/image.png?ex=6576b927&is=65644427&hm=763e912b14c8534f3e7174c1085bf38cdc3a9c8e31c366867c318341b2442156&=&format=webp&width=796&height=597", // 13
    "https://media.discordapp.net/attachments/944810556622245908/1178597218006093844/image.png?ex=6576b932&is=65644432&hm=c8f28b36e818449af6e84b409298dab3f000548407c39406a3e36ef8a38c13a5&=&format=webp&width=800&height=597", // 14
    "https://media.discordapp.net/attachments/944810556622245908/1178597277510664203/image.png?ex=6576b940&is=65644440&hm=aaf2acd6c5c6ca79bba52e6d1d3f042cfde4e0792169f499706c0e130725ba11&=&format=webp&width=798&height=597", // 15
    "https://media.discordapp.net/attachments/944810556622245908/1178597317557878784/image.png?ex=6576b949&is=65644449&hm=e1e2616b3b31b5aeb179d28be11f05a93bbc2673b5dc626ca93797432c50106d&=&format=webp&width=806&height=597", // 16
    "https://media.discordapp.net/attachments/944810556622245908/1178597357475090432/image.png?ex=6576b953&is=65644453&hm=8e64bdec031e9b96aaa94e4608fc74d57ef72c93a46b97813a61162aa3f8daa1&=&format=webp&width=797&height=597", // 17
    "https://media.discordapp.net/attachments/944810556622245908/1178597527403106344/image.png?ex=6576b97b&is=6564447b&hm=2faa094e0d0aaaad4284da8cdb2720580c16bd5b7f0f38de0fd0a8e13b04d60d&=&format=webp&width=803&height=597", // 18
    "https://media.discordapp.net/attachments/944810556622245908/1178597568419201024/image.png?ex=6576b985&is=65644485&hm=7938ca5796f287d7830b0e5b08f5d0c56430a03e58ba59c41eb7c2fe95f27bed&=&format=webp&width=804&height=597", // 19
    "https://media.discordapp.net/attachments/944810556622245908/1178597608399314997/image.png?ex=6576b98f&is=6564448f&hm=c2a31c9f1d32a71225cc9347049241b3ff4f2b8f3d73fba9c8fb0756c7b5a9ea&=&format=webp&width=793&height=597", // 20
    "https://media.discordapp.net/attachments/944810556622245908/1178597643870552164/image.png?ex=6576b997&is=65644497&hm=98ea89b6f56e02cd4d1513402b10e8ee9deb64a2772dc646a5cdfc73b17f0623&=&format=webp&width=807&height=597", // 21
    "https://media.discordapp.net/attachments/944810556622245908/1178597705270964235/image.png?ex=6576b9a6&is=656444a6&hm=ea233c4d737b397da425d60d98f6c07d84f48c26b2f34b92199c9c1f0d35563d&=&format=webp", // 22
    "https://media.discordapp.net/attachments/944810556622245908/1178597750259064892/image.png?ex=6576b9b0&is=656444b0&hm=6a562d6d84949ffd0dc9c78df1d7adc861a93100cdb95480489d6fd57aa2deff&=&format=webp", // 23
    "https://media.discordapp.net/attachments/944810556622245908/1178597786720157746/image.png?ex=6576b9b9&is=656444b9&hm=3ca891a24a36dfe79b6a68dbe3ecc15cf68bb8cdb71f9923114ba628a4fbf381&=&format=webp&width=811&height=597", // 24
    "https://media.discordapp.net/attachments/944810556622245908/1178597826394075187/image.png?ex=6576b9c3&is=656444c3&hm=3b74d36e4e987bb8c898966063fbb4bc7b0405fe9ea7ce6434e1beed0082ad9d&=&format=webp", // 25
    "https://media.discordapp.net/attachments/944810556622245908/1178597867460505610/image.png?ex=6576b9cc&is=656444cc&hm=9c014dabd10b5ac4a8bc15e4af4c0f0398e058c67606eccf7bac1055b2e482c0&=&format=webp", // 26
    "https://media.discordapp.net/attachments/944810556622245908/1178597902705229854/image.png?ex=6576b9d5&is=656444d5&hm=33b9d0a2fc27735c1fd8343b38a2ecbe1edfe1f66113564b311033ea3a8c187c&=&format=webp&width=814&height=597", // 27
    "https://media.discordapp.net/attachments/944810556622245908/1178597939896127488/image.png?ex=6576b9de&is=656444de&hm=ce3bccb3eb9c845a82f504d200148b0df44a097a4508628a6557e07a715b39e0&=&format=webp", // 28
    "https://media.discordapp.net/attachments/944810556622245908/1178597973245038602/image.png?ex=6576b9e6&is=656444e6&hm=dd4be2906c50fa4cf7ff5a150a57e9116f3afbe55fcc24f313887e6e6f7e1885&=&format=webp", // 29
    "https://media.discordapp.net/attachments/944810556622245908/1178598026554642442/image.png?ex=6576b9f2&is=656444f2&hm=4878a081fb87dd2e1872d95b82bff73de4e8a5394d3094ff9745089339c84fee&=&format=webp", // 30
    "https://media.discordapp.net/attachments/944810556622245908/1178598072863965274/image.png?ex=6576b9fd&is=656444fd&hm=27fbc728e41dc8e2b7be62acfa7cef5bd426db51abf0bc3cfffee21e4d10805d&=&format=webp" // 31
];



// below is testing
// var imageArray = [ // should be working, just update links and maybe try testing path?
//     'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
//     'https://www.whitehouse.gov/wp-content/uploads/2021/01/17_andrew_johnson.jpg',
//     'https://www.whitehouse.gov/wp-content/uploads/2021/01/17_andrew_johnson.jpg',
//     'https://www.whitehouse.gov/wp-content/uploads/2021/01/17_andrew_johnson.jpg',
//     'https://www.whitehouse.gov/wp-content/uploads/2021/01/17_andrew_johnson.jpg',
//     'https://www.whitehouse.gov/wp-content/uploads/2021/01/17_andrew_johnson.jpg',
//     'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
//     'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
//     'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
//     'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
//     'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
//     'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
//     'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
//     'images/image13.JPG',
//     'images/image14.JPG',
//     'images/image15.JPG',
//     'images/image16.JPG',
//     'images/image17.JPG',
//     'images/image18.JPG',
//     'images/image19.JPG',
//     'images/image20.JPG',
//     'images/image21.JPG',
//     'images/image22.JPG',
//     'images/image23.JPG',
//     'images/image24.JPG',
//     'images/image25.JPG',
//     'images/image26.JPG',
//     'images/image27.JPG',
//     'images/image28.JPG',
//     'images/image29.JPG',
//     'images/image30.JPG',
//     'images/image31.JPG'
// ];


// Function to set put random images from image array into question
function randomImage() {
    // Set random image for question 1
    var randomIndex = Math.floor(Math.random() * 10);
    var randomImage = imageArray[randomIndex];
    document.getElementById('imageq1').src = randomImage;
    // console.log(document.getElementById('imageq1'))
    // testing: console.log(document.getElementById('imageq1')) // outputs random image link and actually updates it
    // works now

    // Set random image for question 2
    var randomIndex = Math.floor(Math.random() * 10);
    var randomImage = imageArray[randomIndex];
    document.getElementById('imageq2').src = randomImage;

    // Set random image for question 3
    var randomIndex = Math.floor(Math.random() * 10);
    var randomImage = imageArray[randomIndex];
    document.getElementById('imageq3').src = randomImage;

    // Set random image for question 4
    var randomIndex = Math.floor(Math.random() * 10);
    var randomImage = imageArray[randomIndex];
    document.getElementById('imageq4').src = randomImage;
} // note: redundant, so maybe try to find a way (maybe loop? and like concatenate strings with imageq + 1, 2, 3, 4) to make cleaner