import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

export const PicturesCarousel = (props) => {
    var items = [
        {
            name: 'randomPictures',
            img: 'https://source.unsplash.com/random/350x350',
            description: 'Random Pictures from Unsplash of homes or Descriptions'
        },
        {
            name: 'randomPictures',
            img: 'https://source.unsplash.com/random/350x350',
            description: 'Random Pictures from Unsplash of homes or Descriptions'
        },
        {
            name: 'randomPictures',
            img: 'https://source.unsplash.com/random/350x350',
            description: 'Random Pictures from Unsplash of homes or Descriptions'
        },
        {
            name: 'randomPictures',
            img: 'https://source.unsplash.com/random/350x350',
            description: 'Random Pictures from Unsplash of homes or Descriptions'
        },
        {
            name: 'randomPictures',
            img: 'https://source.unsplash.com/random/350x350',
            description: 'Random Pictures from Unsplash of homes or Descriptions'
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export const Item = (props) => {
    return (
        <Paper>
            <img src={props.item.img} alt='randomImagesTest' />
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Testing it Out
            </Button>
        </Paper>
    )
}