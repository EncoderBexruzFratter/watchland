import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { colors } from '../../constants/colors';
import { Api_Service } from '../../service/Api.service';
import { Videos } from '../';  // To'g'ri import qilinganligini tekshiring

const Search = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        console.log(`Fetching data for: ${id}`);  // Debugging log
        const data = await Api_Service.fetching(`search?part=snippet&q=${id}`);
        console.log('Data fetched:', data);  // Debugging log
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);  // Enhanced error logging
      } 
    }

    if (id) {  // Ensure id is defined
      getData();
    }
  }, [id]);  

  console.log(id);
  return (
    <Box p={2} sx={{ height: '90vh' }}>
      <Container maxWidth={'90%'}>
        <Typography variant={'h4'} color={colors.primary} fontWeight={'bold'} mb={2}>
          Search results for <span style={{ color: colors.primary }}>{id}</span> videos
        </Typography>
        <Videos videos={videos} />  {/* To'g'ri prop yuborilganligini tekshiring */}
      </Container>
    </Box>
  );
}

export default Search;
