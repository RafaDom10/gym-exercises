import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    }
  ]

  return (
    <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, padding: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading='lazy' />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant='h3'>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercise keep you strong. {name} {' '}
          is one f the best exercises to target your {target}.
          It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item, idx) => (
          <Stack key={idx} direction='row' gap='24px' alignItems='center'>
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} sx={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform='capitalize' variant='h5'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail
