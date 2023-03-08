const projectData = [
    {id:"1", name: "", address: "", type: "Architecture", description: ``, image: ["/Assets/Projects/1-0.jpg", "/Assets/Projects/1-1.jpg", "/Assets/Projects/1-2.jpg", "/Assets/Projects/1-3.jpg", "/Assets/Projects/1-4.jpg", "/Assets/Projects/1-5.jpg", "/Assets/Projects/1-6.jpg", "/Assets/Projects/1-7.jpg", "/Assets/Projects/1-8.jpg", "/Assets/Projects/1-9.jpg", "/Assets/Projects/1-10.jpg", "/Assets/Projects/1-11.jpg", "/Assets/Projects/1-12.jpg", "/Assets/Projects/1-13.jpg", "/Assets/Projects/1-14.jpg", "/Assets/Projects/1-15.jpg", "/Assets/Projects/1-16.jpg"]},
    {id:"2", name: "", address: "", type: "", description: ``, image: ["/Assets/Projects/2-0.jpg", "/Assets/Projects/2-1.jpg", "/Assets/Projects/2-2.jpg", "/Assets/Projects/2-3.jpg", "/Assets/Projects/2-4.jpg", "/Assets/Projects/2-5.jpg", "/Assets/Projects/2-6.jpg", "/Assets/Projects/2-7.jpg", "/Assets/Projects/2-8.jpg", "/Assets/Projects/2-9.jpg", "/Assets/Projects/2-10.jpg", "/Assets/Projects/2-11.jpg"]},
    {id:"3", name: "", address: "", type: "", description: ``, image: ["/Assets/Projects/3-0.jpg", "/Assets/Projects/3-1.jpg", "/Assets/Projects/3-2.jpg", "/Assets/Projects/3-3.jpg", "/Assets/Projects/3-4.jpg", "/Assets/Projects/3-5.jpg", "/Assets/Projects/3-6.jpg", "/Assets/Projects/3-7.jpg", "/Assets/Projects/3-8.jpg", "/Assets/Projects/3-9.jpg", "/Assets/Projects/3-10.jpg", "/Assets/Projects/3-11.jpg"]},
    {id:"4", name: "", address: "", type: "", description: ``, image: ["/Assets/Projects/4-0.jpg", "/Assets/Projects/4-1.jpg", "/Assets/Projects/4-2.jpg", "/Assets/Projects/4-3.jpg", "/Assets/Projects/4-4.jpg", "/Assets/Projects/4-5.jpg", "/Assets/Projects/4-6.jpg", "/Assets/Projects/4-7.jpg", "/Assets/Projects/4-8.jpg", "/Assets/Projects/4-9.jpg", "/Assets/Projects/4-10.jpg", "/Assets/Projects/4-11.jpg", "/Assets/Projects/4-12.jpg"]},
    {id:"5", name: "", address: "", type: "Architecture", description: ``, image: ["/Assets/Projects/5-0.jpeg"]},
    {id:"6", name: "", address: "", type: "Architecture", description: ``, image: ["/Assets/Projects/6-0.jpeg"]},
    {id:"7", name: "", address: "", type: "Architecture", description: ``, image: ["/Assets/Projects/7-0.jpeg"]},
    {id:"8", name: "", address: "", type: "Architecture", description: ``, image: ["/Assets/Projects/8-0.jpeg"]},
    {id:"9", name: "", address: "", type: "Landscape", description: `If you feel strongly for nature and believe that preserving and nurturing the natural world will benefit us all. Then home garden ideas will instantly uplift your mood. You don't need a sprawling garden to create your very own zen corner. A patty patch of green grass and seating area under pergola and even a beautiful swimming pool make for a beautiful garden space within as outside your home. Besides bringing an aesthetic value to the home, flowers and green grass add a soothing vibe and purify the air around, but this ones a little out of the box because it combines the benefits of an open garden and modern living into one, pushing towards a healthier lifestyle choice. This home garden idea allows you to salvage a simple garden and turn it into a gorgeous escape. \nThere are many things that your home’s outdoor areas can give to you without interruption. The swimming pool gives you a luxurious feeling in any house but it needs a large area to construct. This swimming pool is the pinnacle of the outdoor appeal that any farmhouse can offer with its outdoor spaces.`, image: ["/Assets/Projects/9-0.jpeg", "/Assets/Projects/9-1.jpeg"]},
    {id:"10", name: "", address: "NOIDA", type: "Interior", description: `This is one of a kind dining room should private intrigue and lead to conservation among guests. Whether it's through striking artwork, colours or furnishing it's important to craft a unique space that reflects the personality and the lifestyle of the homeowner, while also ensuring the space is well designed. \nWe spoke with our team to strike a balance between creative design and functional use when devising these unique dining rooms. Clients' imagination convert in reality is always our priority and we keep doing it.`, image: ["/Assets/Projects/10-0.jpeg", "/Assets/Projects/10-1.jpeg",]},
    {id:"11", name: "", address: "NOIDA", type: "", description: `This bedroom design revolves around one piece of furniture in particular, while the bed is usually the main event. It's the oft overlooked supporting cost of furniture and decoration that can help to bring the best in the bedroom. This bedroom’s colour makes all the difference to set the right mood in their room. No matter what style of the room a well lifted space is the key to a good ambience and our team has been worked out. \nThis colour combination is a classic but our team here have managed to give a unique touch to it. It looks smart and radiates simplicity but at the same time is not dull or mundane. A soft brown wooden wall colour, a tube top wash basin and some basic steel hardware bathroom accessories complete the bathroom’s look.`, image: ["/Assets/Projects/11-0.jpeg", "/Assets/Projects/11-1.jpeg"]},
    {id:"12", name: "", address: "", type: "Interior", description: `This is a great combination of dining and living area with finest designer furniture by clients which are providing a rich look to the area.`, image: ["/Assets/Projects/12-0.jpeg", "/Assets/Projects/12-1.jpeg", "/Assets/Projects/12-2.jpeg"]},
    {id:"13", name: "", address: "", type: "Interior", description: `This bedroom is designed to be right and engaging, bright colours, patterns and silhouette give this room a playful vibe.`, image: ["/Assets/Projects/13-0.jpeg", "/Assets/Projects/13-1.jpeg"]},
    {id:"14", name: "", address: "", type: "Interior", description: `Modern architecture has a modern kitchen design which is the most important part of a modern architecture. These equipment and modern furniture have been constructed in modules.`, image: ["/Assets/Projects/14-0.jpeg", "/Assets/Projects/14-1.jpeg", "/Assets/Projects/14-2.jpeg"]},
    {id:"15", name: "", address: "", type: "Interior", description: ``, image: ["/Assets/Projects/15-0.jpeg", "/Assets/Projects/15-1.jpeg", "/Assets/Projects/15-2.jpeg", "/Assets/Projects/15-3.jpeg"]},
    {id:"16", name: "The Dove and Mouse Cafe", address: "NOIDA", type: "", description: `This is a great example of vintage and modern cafe interior. It is our first turnkey project, located in Noida Sector - 125 for a MBA businessman. He needs a different design from all nearby cafes. The site is very far for our team but they did the finest work with dedication. The chairs are designed by Tarun Aggarwal Designer in Noida Sec - 63 and tables are assembled by our designers. The tables have high glossy laminate on top with steel support with spray paint. \nThe client wants a different look for every wall, so our team makes walls with different looks like WPC boards with spray paint which creates a green look with a decorated green wall. \nThe circular particle boards on the wall are making a visual focal point. Strip lights surrounding the board enhance the focal point of the wall. \nServing area has an existing plywood board ceiling which is reinstalled after polish. Hanging rectangular boxes with light are also made by existing plywood boards. \nWe used existing plywood board to make the sofa and Tv unit fabric is selected by designers for the sofa set. Designers make a good bond with carpenters and are enthusiastic about the work environment. \nThe ceiling is a main part of every design that’s why our designers make a unique combo of horizontal PVC board and circular particle board with lights.
    `, image: ["/Assets/Projects/16-0.jpeg", "/Assets/Projects/16-1.jpeg", "/Assets/Projects/16-2.jpeg", "/Assets/Projects/16-3.jpeg", "/Assets/Projects/16-4.jpeg", "/Assets/Projects/16-5.jpeg", "/Assets/Projects/16-6.jpeg", "/Assets/Projects/16-7.jpeg", "/Assets/Projects/16-8.jpeg", "/Assets/Projects/16-9.jpeg", "/Assets/Projects/16-10.jpeg", "/Assets/Projects/16-11.jpeg", "/Assets/Projects/16-12.jpeg", "/Assets/Projects/16-13.jpeg"]},
    {id:"17", name: "MMTC Jewellers", address: "SOUTH EX-2", type: "", description: `This was our second turnkey project, it was a jewellery showroom and situated in south delhi. We did a lot of hard work in this project because the client needed a modern showroom in comparison to all nearby showrooms. Our team was full of confidence to make this area into a good looking jewellery showroom. All furniture is assembled by our team on site. \nThe flooring tile pattern is selected by our designers and installed by our team. The main part of this area was its ACP ceiling which was created by designers and the working team did magnificent work to create and install this ceiling.
    `, image: ["/Assets/Projects/17-0.jpeg", "/Assets/Projects/17-1.jpeg", "/Assets/Projects/17-2.jpeg", "/Assets/Projects/17-3.jpeg"]},
]
export default projectData
