import React from 'react'

const page = () => {
  return (
    <div><section>
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-2 lg:max-w-3xl lg:text-3xl mx-auto text-blue-900 underline-offset-8 underline pb-5 -mt-10 pt-16"> CONTACT US</h2>
<p className="lg:text-2xl  md:text-xl text-xl lg:px-2 text-gray-800 pb-3">Welcome! If you&apos;re looking for prayer, have questions about our mission, or feel inspired to connect, we&apos;re here for you. At <b>Elijah&apos;s Fire Faith Ministry and Yes4save Foundation</b>, every voice is valued and every heart is seen. Let us walk together in faith and love.
</p>
        </div>
        <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                        width="100%" height="350" allowFullScreen loading="lazy"></iframe>
                </div>
                <div>
                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                            <p className="mt-1 text-gray-600">123 Main St, San Francisco, CA 94105</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                            <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                            <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                            <p className="mt-1 text-gray-600">Sunday: Closed</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                            <p className="mt-1 text-gray-600">Email: info@example.com</p>
                            <p className="mt-1 text-gray-600">Phone: +1 23494 34993</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-20 mx-auto">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdEvX5DvwZQcYjBN24v8bxbnjXYuPw2D8ElRM9cVpcLM8U1ig/viewform?embedded=true" width="100%" height="700" frameBorder="0">Loading…</iframe></div>
            
        </div>
    </div>
</section></div>
  )
}

export default page