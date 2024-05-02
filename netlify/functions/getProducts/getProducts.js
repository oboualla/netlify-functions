// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      headers : {
        'access-control-allow-origin': '*'
      },
      body: JSON.stringify(
        [
          {
            image_url : 'https://i0.wp.com/dansmamaison.ma/wp-content/uploads/2024/01/MLM-611743WEB.jpg?fit=1800%2C1200&quality=89&ssl=1',
            title : "Chaise de  bureau",
            description : "Une chaose ergonomique pour le bureau",
            prix : "700 DH",
            supp_details : "Reglable en hauteur"
          },
          {
            image_url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPtRwcpsKQ8UOOKhWA1ymZILw5hzgd5QzMg3TaTjRtw&s',
            title : "Ordinateur portable",
            description : "un ordinateur portable puissant pour les professionnels.",
            prix : "5000 DH",
            supp_details : "Processeur Intel core i7."
          },
          {
            image_url : 'https://www.boutica-design.fr/42860-large_default/lampe-de-bureau-a-fixation-serre-joint-hobby-1x40w-e27-noir-brilliant-10802_06.jpg',
            title : "Lampe de bureau LED",
            description : "Une lampe de bureau moderne avec eclairage LED reglable",
            prix : "150 DH",
            supp_details : "Bras articule, luminosite."
          },
          {
            image_url : 'https://i0.wp.com/dansmamaison.ma/wp-content/uploads/2024/01/MLM-611743WEB.jpg?fit=1800%2C1200&quality=89&ssl=1',
            title : "Chaise de  bureau",
            description : "Une chaose ergonomique pour le bureau",
            prix : "700 DH",
            supp_details : "Reglable en hauteur"
          },
          {
            image_url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPtRwcpsKQ8UOOKhWA1ymZILw5hzgd5QzMg3TaTjRtw&s',
            title : "Ordinateur portable",
            description : "un ordinateur portable puissant pour les professionnels.",
            prix : "5000 DH",
            supp_details : "Processeur Intel core i7."
          },
          {
            image_url : 'https://www.boutica-design.fr/42860-large_default/lampe-de-bureau-a-fixation-serre-joint-hobby-1x40w-e27-noir-brilliant-10802_06.jpg',
            title : "Lampe de bureau LED",
            description : "Une lampe de bureau moderne avec eclairage LED reglable",
            prix : "150 DH",
            supp_details : "Bras articule, luminosite."
          },

          {
            image_url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPtRwcpsKQ8UOOKhWA1ymZILw5hzgd5QzMg3TaTjRtw&s',
            title : "Ordinateur portable",
            description : "un ordinateur portable puissant pour les professionnels.",
            prix : "5000 DH",
            supp_details : "Processeur Intel core i7."
          },
          {
            image_url : 'https://www.boutica-design.fr/42860-large_default/lampe-de-bureau-a-fixation-serre-joint-hobby-1x40w-e27-noir-brilliant-10802_06.jpg',
            title : "Lampe de bureau LED",
            description : "Une lampe de bureau moderne avec eclairage LED reglable",
            prix : "150 DH",
            supp_details : "Bras articule, luminosite."
          }
        ]
      ),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
