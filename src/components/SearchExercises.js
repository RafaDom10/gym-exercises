import { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { fetchData, baseURL } from '../utils/fetchData'
import HorizontalScrollBar from '../components/HorizontalScrollBar'

const SearchExercises = () => {
  const [search, setSearch] = useState()
  const [exercises, setExercises] = useState([])
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(`${baseURL}/exercises/bodyPartsList`)
      setBodyParts(['All', ...bodyPartsData])
    }

    fetchExercisesData()
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(`${baseURL}/exercises`)

      const searchedExercise = exerciseData.filter(exercise => (
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
      ))

      setSearch('')
      setExercises(searchedExercise)
    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography
        fontWeight={700}
        textAlign='center'
        sx={{
          fontSize: { lg: '44px', xs: '30px' }
        }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#FFF',
            borderRadius: '40px'
          }}
          height='76px'
          value={search}
          onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
          placeholder='Search Exercises'
          type='text'
        />
        <Button
          className='search-btn'
          sx={{
            backgroundColor: '#FF2625',
            color: '#FFF',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar data={bodyParts} />
      </Box>
    </Stack>
  )
}

export default SearchExercises
