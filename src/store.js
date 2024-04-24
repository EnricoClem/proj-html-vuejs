import { reactive } from "vue";

export const store = reactive({
    products: [
        {
            name: 'Fresh Apple',
            img: 's5.jpg',
            price: '$18',
            sale: '',
            trending: 'trending'
        }, {
            name: 'Fresh Cobies',
            img: 's2.jpg',
            price: '$18',
            sale: '$17',
            trending: 'trending'
        }, {
            name: 'Fresh Waterlemon',
            img: 's8.jpg',
            price: '$15',
            sale: '',
            trending: 'trending'
        }, {
            name: 'Organic Juice',
            img: 's1.jpg',
            price: '$20',
            sale: '$15',
            trending: 'trending'
        }, {
            name: 'Fresh Bluebarries',
            img: 's4.jpg',
            price: '$19',
            sale: '$14',
            trending: ''
        }, {
            name: 'Organic Letus',
            img: 's10.jpg',
            price: '$23',
            sale: '',
            trending: ''
        }, {
            name: 'Red Gajor',
            img: 's9.jpg',
            price: '$28',
            sale: '$26',
            trending: ''
        }, {
            name: 'Naga Pepper',
            img: 's7.jpg',
            price: '$21',
            sale: '',
            trending: ''
        }, 
    ]
})