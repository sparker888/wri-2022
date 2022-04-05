import * as React from "react"
// import { Link } from "gatsby"
// import Layout from "../components/layout"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  CursorClickIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
  {
    name: 'Virtual Registration',
    description: 'rights wolf mixtape enamel pin elit cray dreamcatcher.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'In-person Registration',
    description: 'Duis sint helvetica 3 wolf moon id kitsch fingerstache.',
    href: '#',
    icon: CursorClickIcon,
  },
]
const resources = [
  { name: 'Info Zone', description: 'knausgaard godard quis occaecat selvage pitchfork.', href: '#' },
  { name: 'WRI Archives', description: 'Leggings godard enamel pin tumblr ea viral.', href: '#' },
  { name: 'Need Help?', description: 'Hoodie gluten-free sartorial lo-fi fanny pack anim.', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const supportLinks = [
  {
    name: 'Rail Transit Seminar',
    date: 'June 21',
    href: '#',
    headlineStyle: 'text-xl font-black text-blue-600',
    dateStyle: 'text-xl font-bold text-blue-600',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1649102547/transit-icon-100_xcxzcw.png',
      imageAlt: 'Rail Transit Seminar icon',
      style: 'absolute top-0 p-0 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2',
  },
  {
    name: 'Principals Course',
    date: 'June 22',
    href: '#',
    headlineStyle: 'text-xl font-black text-green-600',
    dateStyle: 'text-xl font-bold text-green-600',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1649102844/principles-icon-100_j8pee7.png',
      imageAlt: 'Principles Course icon',
      style: 'absolute top-0 p-0 inline-block bg-green-600 rounded-xl shadow-lg transform -translate-y-1/2',
  },
  {
    name: 'Heavy Haul Seminar',
    date: 'June 23-24',
    href: '#',
    headlineStyle: 'text-xl font-black text-red-800',
    dateStyle: 'text-xl font-bold text-red-800',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
      imageSrc: 'https://res.cloudinary.com/gravital-digital/image/upload/v1649102904/heavy-haul-icon_scac6v.png',
      imageAlt: 'Heavy Haul Seminar icon',
      style: 'absolute top-0 p-0 inline-block bg-red-800 rounded-xl shadow-lg transform -translate-y-1/2',
  },
]

const speakers = [
  {
    name: 'Shamkar Rajaram',
    role: 'Sound Transit',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/c_crop,h_87,w_83/v1649116637/rajaram_emoamv.jpg',
  },
  {
    name: 'Andy Vickerstaff',
    role: 'Transport for London',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/c_crop,h_87,w_87/v1649116599/vickerstaff_drpiei.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  {
    name: 'Example Person',
    role: 'Example Company',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/e_grayscale/v1649117175/example-person_y6je2u.jpg',
  },
  // More people...
]

const navigation = {
  railTransit: [
    { name: 'Information', href: '#' },
    { name: 'Speakers', href: '#' },
    { name: 'Registration', href: '#' },
    { name: 'Archives', href: '#' },
  ],
  principalsCourse: [
    { name: 'Information', href: '#' },
    { name: 'Speakers', href: '#' },
    { name: 'Registration', href: '#' },
    { name: 'Archives', href: '#' },
  ],
  heavyHaul: [
    { name: 'Information', href: '#' },
    { name: 'Speakers', href: '#' },
    { name: 'Registration', href: '#' },
    { name: 'Archives', href: '#' },
    { name: 'Info Zone', href: '#' },
  ],
  help: [
    { name: 'Accommodations', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Sponsorship', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
}

const events = [
  {
    title: 'Rail Transit Seminar',
    href: '#',
    category: { name: 'June 21, 2022', href: '#' },
    description:
      'The Rail Transit Seminar is devoted to examining wheel/rail and vehicle/track interaction on light rail and subway operations. This cross-disciplinary seminar will include presentations from experts in vehicle/track dynamics, noise and vibration, wheel/rail profile design and maintenance, and friction management.',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/v1649120590/rail-transit-image_ctu3cu.jpg',
  },
  {
    title: 'Principals Course',
    href: '#',
    category: { name: 'June 22, 2022', href: '#' },
    description:
      'Designed for both Rail Transit and Heavy Haul seminar attendees, "Principles of Wheel/Rail Interaction" is an intensive, full-day course providing in-depth examination of the primary aspects of wheel/rail and vehicle/track interaction.',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/v1649120602/principals-course_j3fafb.jpg',
  },
  {
    title: 'Heavy Haul Seminar',
    href: '#',
    category: { name: 'June 23-24, 2022', href: '#' },
    description:
      'The Heavy Haul Seminar is devoted to examining wheel/rail and vehicle/track interaction on heavy haul freight and shared-track passenger systems. The latest information on new and existing technology, and the ways in which it is being used to improve wheel/rail interaction on freight and passenger railways will be presented by some of the best minds in railroading.',
    imageUrl:
      'https://res.cloudinary.com/gravital-digital/image/upload/v1649120609/heavy-haul_zhpoqo.jpg',
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      {/* Banner on top */}
      <div className="relative bg-red-800">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="pr-16 sm:text-center sm:px-16">
            <p className="font-medium text-white">
              <span className="md:hidden">Travel to Canada is open!</span>
              <span className="hidden md:inline">Big news! Restrictions to travel to Canada have been lifted!</span>
              <span className="block sm:ml-2 sm:inline-block">
                <a href="#" className="text-white font-bold underline">
                  {' '}
                  Register today <span aria-hidden="true">&rarr;</span>
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Title Section */}

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mt-1 mb-6 text-5xl font-black text-gray-900 sm:text-6xl sm:tracking-tight lg:text-8xl">WRI 2022</h2>
            <h4 className="text-2xl font-bold text-red-800 sm:text-3xl tracking-wide uppercase lg:text-4xl">
            27th ANNUAL WHEEL RAIL INTERACTION CONFERENCE
            </h4>
            <p className="max-w-xl mt-3 mx-auto text-xl text-gray-900">
            The Educational Railroading Conference Leader Since 1994
            </p>
          </div>
        </div>
      </div>

      {/* Sponsor Logos */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto pt-4 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
            <div className="col-span-1 flex justify-center md:col-span1 lg:col-span-1">
              <img className="h-12" src="https://res.cloudinary.com/gravital-digital/image/upload/v1649107664/mass_transit_logo_adapnu.png" alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://res.cloudinary.com/gravital-digital/image/upload/v1649107669/trains_fkfals.svg" alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://res.cloudinary.com/gravital-digital/image/upload/v1649107677/cars-acfcf-logo_lu8zlx.png" alt="StaticKit" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Popover className="relative bg-gray-900">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          {/* <a href="#">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </a> */}
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-200' : 'text-gray-200',
                    'group bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                  )}
                >
                  <span>Registration</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {solutions.map((solution) => (
                          <a
                            key={solution.name}
                            href={solution.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white sm:h-12 sm:w-12">
                              <solution.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{solution.name}</p>
                              <p className="mt-1 text-sm text-gray-500">{solution.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="p-5 bg-gray-50 sm:p-8">
                        <a href="#" className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                          <div className="flex items-center">
                            <div className="text-base font-medium text-gray-900">Want to book a group?</div>
                            <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-gray-200 text-red-800">
                              NEW
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            Contact us for more details on bringing a group to WRI.
                          </p>
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <a href="#" className="text-base font-medium text-gray-200 hover:text-blue-400">
            Accommodations
          </a>
          <a href="#" className="text-base font-medium text-gray-200 hover:text-blue-400">
            FAQ
          </a>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-200' : 'text-gray-200',
                    'group bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                  )}
                >
                  <span>More</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {resources.map((resource) => (
                          <a
                            key={resource.name}
                            href={resource.href}
                            className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                          >
                            <p className="text-base font-medium text-gray-900">{resource.name}</p>
                            <p className="mt-1 text-sm text-gray-500">{resource.description}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          {/* <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            Sign in
          </a>
          <a
            href="#"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign up
          </a> */}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-gray-900 ring-opacity-5 bg-gray-900 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                        <solution.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">{solution.name}</div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Accommodations
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  FAQ
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  More
                </a>
                {resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {resource.name}
                  </a>
                ))}
              </div>
              {/* <div className="mt-6">
                 <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p> 
              </div> */}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>

      {/* Hero with seminar cards */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/gravital-digital/image/upload/v1649104930/vancouver-unsplash_g7l602.jpg"
            alt="Vancouver, BC June 21-24, 2022"
          />
          <div className="absolute inset-0 bg-sky-500 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Vancouver, BC</h1>
          <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">June 21-24, 2022</h3>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className={link.style}>
                  <img src={link.imageSrc} alt={link.imageAlt} className="object-center object-cover" />
                </div>
                <h3 className={link.headlineStyle}>{link.name}</h3>
                <h3 className={link.dateStyle}>{link.date}</h3>
                <p className="mt-4 text-base text-gray-900">{link.description}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href={link.href} className="text-base font-medium text-blue-600 hover:text-blue-600">
                  Event Registration<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
        <div className="bg-white pt-16 lg:py-8">
        <div className="pb-16 bg-blue-600 lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative lg:-my-8">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img
                    className="object-cover lg:h-full lg:w-full"
                    src="https://res.cloudinary.com/gravital-digital/image/upload/v1649115845/shipman-northcutt-sgZX15Da8YE-unsplash_wckx59.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <blockquote>
                  <div>
                    <svg
                      className="h-12 w-12 text-white opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-6 text-2xl font-medium text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet
                      feugiat est integer dolor auctor adipiscing nunc urna, sit.
                    </p>
                  </div>
                  <footer className="mt-6">
                    <p className="text-base font-medium text-white">John Parsons</p>
                    <p className="text-base font-medium text-indigo-100">CEO at Rail Innovations</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Speakers */}
    <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">WRI 2022 Speakers</h2>
            <p className="text-xl text-red-800">
              Risus velit condimentum vitae tincidunt tincidunt. Mauris ridiculus fusce amet urna nunc. Ut nisl ornare
              diam in.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            {speakers.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src={person.imageUrl} alt="" />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                      <h3>{person.name}</h3>
                      <p className="text-blue-900">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    {/* CTA */}  
    <div className="bg-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Three big events!</span>
          <span className="block text-red-800">Discounts for industry employees.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-red-800"
            >
              Register Online
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-red-800"
            >
              Register In Person
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Events Overview */}
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Join WRI in Vancouver — June 2022</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {events.map((event) => (
            <div key={event.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={event.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-800">
                    <a href={event.category.href} className="hover:underline">
                      {event.category.name}
                    </a>
                  </p>
                  <a href={event.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{event.title}</p>
                    <p className="mt-3 text-base text-gray-700">{event.description}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Event Sponsorship */}
    <div className="relative bg-blue-500">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/gravital-digital/image/upload/v1649119783/stem-list-EVgsAbL51Rk-unsplash_uwuqim.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-blue-900 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Become a WRI Sponsor</h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
          lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.
        </p>
      </div>
    </div>

    {/* Footer */}  
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-blue-600 tracking-wider uppercase">Rail Transit</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.railTransit.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-red-800">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-blue-600 tracking-wider uppercase">Principals Course</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.principalsCourse.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-red-800">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-blue-600 tracking-wider uppercase">Heavy Haul</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.heavyHaul.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-red-800">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-blue-600 tracking-wider uppercase">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.help.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-red-800">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-gray-300">
              Get the latest WRI news and information sent right to your inbox.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-blue-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2022 Wheel Rail Seminars, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

    </div>
  )
}
