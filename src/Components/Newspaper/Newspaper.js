import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Newspaper = () => {
      const [articles, setArticles] = useState([]);

      useEffect(()=>{
            fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=1fa4b952114444f18e5517be371d2f98')
            .then(res=>res.json())
            .then(data=> setArticles(data.articles))
      },[])
      return (
            <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                              <Grid item xs={2} sm={4} md={4}>
                                    

                              </Grid>
                        }
                  </Grid>
            </Box>
      );
};

export default Newspaper;