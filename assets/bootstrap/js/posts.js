let postsParent = document.getElementById('posts-row');
let posts = [
    {
        date: "2022-12-28",
        views: 1002,
        imgSrc: "./assets/img/landing-page/blog-image1.webp",
        description: "In this blog, we delve into a variety of topics that cater to both newcomers and seasoned professionals in the web development field.Each article is crafted to enhance your skills and knowledge, ensuring you're well-equipped for any project.",
        link: "#"
    },
    {
        date: "2024-05-08",
        views: 586,
        imgSrc: "./assets/img/landing-page/blog-image2.webp",
        description: "This blog serves as an introduction to the latest trends and best practices in web design. Join us on a journey through insightful posts that will keep you informed about the tools and techniques shaping the future of web development.",
        link: "#"
    },
    {
        date: "2023-09-01",
        views: 56991,
        imgSrc: "./assets/img/landing-page/blog-image3.webp",
        description: "Here, we present an engaging overview of our discussions on web development frameworks and methodologies. Stay ahead of the curve with our regular updates on the latest innovations and practices that can optimize your workflow.",
        link: "#"
    },
    {
        date: "2024-07-11",
        views: 25771,
        imgSrc: "./assets/img/landing-page/blog-image4.webp",
        description: "we delve into the realm of artificial intelligence and its applications. Explore the forefront of AI innovation with our insightful discussions on machine learning, natural language processing, and more.",
        link: "#"
    }
];

function sortByDate() {
    for (let i = 0; i < posts.length; i++) {
        for (let j = i + 1; j < posts.length; j++) {
            if (posts[i].date < posts[j].date) {
                let temp = posts[i];
                posts[i] = posts[j];
                posts[j] = temp;
            }
        }
    }
    displayProducts();
}

function sortByViews() {
    for (let i = 0; i < posts.length; i++) {
        for (let j = i + 1; j < posts.length; j++) {
            if (posts[i].views < posts[j].views) {
                let temp = posts[i];
                posts[i] = posts[j];
                posts[j] = temp;

            }
        }
    }
    displayProducts();
}


function displayProducts() {
    postsParent.innerHTML = "";
    for (let i = 0; i < Math.min(3, posts.length); i++) {


        const postElement = document.createElement('div');
        postElement.setAttribute('data-date', posts[i].date);
        postElement.setAttribute('data-view', posts[i].view);
        postElement.className = "posts col-lg-4 d-flex align-items-lg-stretch fade-in";

        const card = document.createElement('div');
        card.className = "card mb-3 shadow";

        const img = document.createElement('img');
        img.src = posts[i].imgSrc;
        img.className = "card-img-top";
        img.alt = "...";

        const cardBody = document.createElement('div');
        cardBody.className = "card-body";

        const lastUpdated = document.createElement('p');
        lastUpdated.className = "card-text";
        lastUpdated.innerHTML = `<small class="text-muted">Last updated on ${posts[i].date} | Views : ${posts[i].views}</small>`;

        const description = document.createElement('p');
        description.className = "card-text mb-4";
        description.innerText = posts[i].description;

        const readMoreLink = document.createElement('a');
        readMoreLink.href = posts[i].link;
        readMoreLink.className = "btn btn-warning d-block w-50 m-auto link-offset-2 link-underline link-underline-opacity-0 card-text fs-5";
        readMoreLink.innerHTML = `  
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">  
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />  
                    </svg>  
                    Read more  
                `;

        cardBody.appendChild(lastUpdated);
        cardBody.appendChild(description);
        cardBody.appendChild(readMoreLink);
        card.appendChild(img);
        card.appendChild(cardBody);
        postElement.appendChild(card);
        postsParent.appendChild(postElement);

    }

}

displayProducts()