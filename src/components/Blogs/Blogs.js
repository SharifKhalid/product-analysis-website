import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className='bonus'>
                <h2>Inline block ও bloce element এর মধ্যে পার্থক্য</h2>

                <p>প্রত্যেকটা html elements এর একটা display value আছে। এই display value কে ২ ভাগে ভাগ করা যায়। ‍যথা-
                    Inline element  ও Block element. Block element browser এ নতুন লাইন থেকে শুরু হয়। এবং সম্পূর্ণ width টুকুই নিয়ে নেয়। Inline element নতুন লাইন থেকে শুরু হয় না। এবং সম্পূর্ণ width নিয়ে নেয় না। যতটুকু প্রয়োজন ঠিক ততটুকুই নেয়। 
                    আবার Inline element কে Inline block এ রূপান্তর করা যায়। তখন একে width এবং heightও দেয়া যায়। তবে Block element এর সাথে Inline block এর পার্থক্য আছে। তা হলো Inline block নতুন লাইন থেকে শুরু হয় না। এটি Inline ও block উভয়ের মতই আচরণ করে।  </p>
            </div>
            <div></div>
        </div>
    );
};

export default Blogs;