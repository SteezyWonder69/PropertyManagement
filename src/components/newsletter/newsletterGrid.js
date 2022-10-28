import React, { Component } from 'react';
import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';

export default class NewsletterGrid extends Component {
    render() {

        const latest = {
            _id: '115',
            title: 'Happy Holidays Bros',
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque odio mi, semper eu ex eu, tincidunt facilisis diam. Aliquam ut ante tortor. Cras ac suscipit quam. Nullam iaculis vel arcu semper convallis. Sed fermentum pulvinar magna eget facilisis. Quisque non nisl elit. Sed quis risus hendrerit, cursus sapien sit amet, eleifend mi. Donec ante eros, tempus quis sapien euismod, dapibus dapibus massa. Curabitur finibus accumsan quam, sed finibus libero efficitur a. Nunc vehicula malesuada justo in ornare. Integer velit tortor, commodo quis ullamcorper pellentesque, vulputate non odio. Integer in faucibus elit, eget dignissim sapien. Morbi consequat elementum magna quis pulvinar. Aenean eu nulla orci. Suspendisse ac velit mollis, posuere orci eget, lobortis lacus. Sed eu risus sed dui ultrices bibendum ut sed sem. Pellentesque rhoncus arcu sit amet purus egestas vestibulum. Vivamus tempor ligula elit, et luctus enim sollicitudin eu. Aenean a mauris facilisis, interdum sapien id, eleifend odio. Vivamus facilisis neque lacus, tristique pulvinar nisl pulvinar in. Ut ultricies metus in justo semper pellentesque. Sed suscipit urna eu faucibus aliquam. Cras semper dapibus eros vel vulputate. Cras maximus varius magna, ut lobortis lorem ullamcorper imperdiet. Nunc ut ligula sit amet nunc ultricies scelerisque. Nullam accumsan quam nunc, condimentum convallis dolor ullamcorper gravida. Donec elementum eros erat, in sollicitudin turpis finibus sit amet.",
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/960x258'
        }

        return (
            <div className='newsletter-grid'>
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
                <NewsletterLatest {...latest}/>
            </div>
        );
    }
}