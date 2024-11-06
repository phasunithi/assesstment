

import React from 'react'

function Owner () {
  return (
    <div className="flex flex-col items-center justify-center p-4">
        <nav />
        <hr className="w-full my-4"/>
            <div className="text-center max-w-3xl">
                <h1 className='font-semibold text-5xl'>Make Phasu 14 - Group D</h1>
                <div className="flex justify-center mb-6 drop-shadow-lg " >
                <img  src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/447717131_2765014463655825_6075056567132605060_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=EK6AOtzTmmUQ7kNvgFa0KA5&_nc_zt=23&_nc_ht=scontent.fbkk5-7.fna&_nc_gid=AfL8lO485JV0nvhvG0NTOUz&oh=00_AYCagYfv5_3qhWPZZ_67lhQf-dTVrcwMNHxZJhZPtO79uQ&oe=6730FAC1" 
                     alt="My picture" 
                     className="rounded-full scale-75 border-solid border-8 border-red-600"
                      />
                </div>
                <h1 className='font-semibold text-2xl'>Short Biography</h1>
                <p className='font-semibold'>"My name is Phasu, but my nickname is Mek. I graduated from Bangkok University with a degree in Radio and Television Broadcasting. I have worked for three years in video editing, and now I am interested in pursuing a career as a programmer or full-stack developer."</p>
            </div>
    </div>
  )
}

export default Owner;
