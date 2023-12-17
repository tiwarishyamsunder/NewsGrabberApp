import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import { Pagination, Typography } from '@mui/material';
import { Box } from '@mui/system';

const News = (props) => {
  const [show, setshow] = useState(false)
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  document.title = `${props.category}-Newsgrabber`;

  const pageChange = (event, value) => {
    setPage(value);
  }

  const pageBtn =
    (<>
      <Pagination variant='outlined' color="primary" count={10} page={page} onChange={pageChange} size="medium" sx={{ display: { xs: "block", sm: "none" } }} />
      <Pagination color="primary" count={10} page={page} onChange={pageChange} size="large" sx={{ display: { xs: "none", sm: "block" } }} />
    </>)


  const updatePage = async () => {
    console.log("updatePage")
    props.changeProgress(10);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a47529c91emsha25daef1e66a341p1ba7adjsn5c4aed17e5e6',
        'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
      }
    };

    fetch(`https://newscatcher.p.rapidapi.com/v1/latest_headlines?&lang=en&topic=${props.category}&country=%20in&media=True`, options)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(err => console.error(err));
      console.log(articles)
      props.changeProgress(100);
    // props.changeProgress(10);
    // console.log(page);
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}`;

    // let data = await fetch(url);
    // props.changeProgress(30);
    // let parsedData = await data.json();
    // props.changeProgress(50);
    // console.log(parsedData);
    // setArticles(parsedData.articles);
    // console.log(articles);
   
    // props.changeProgress(100);
  }

  useEffect(() => {
    updatePage();
    setTimeout(() => {
      setshow(true)
    }, 2000);
    // eslint-disable-next-line
  }, [page])

  return (
    < Box m={1}>
      <Typography mt={10} textAlign={'center'} sx={{ fontSize: { xs: '27px', md: '40px' }, fontWeight: 'bold' }}>Top {props.category} headlines</Typography>
  
         <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(3, 1fr)' }, }}>
           {articles.slice((page - 1) * 9, ((page - 1) * 9) + 9).map((element, index) => {
            return (
            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.summary ? element.summary.slice(0, 88) : ""} imageUrl={element.media} newsUrl={element.link} author={element.author} date={element.published_date} source={element.topic} />
            );
           })}
         </Box>

      <Box mt={2} sx={{ display: "flex", justifyContent: "center" }} >
        {show && pageBtn}
      </Box>
    </Box>
  )
}

News.defaultProps = {
  country: 'in',
  category: 'General',
  pageSize: 6
}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}
export default News
