'use client';

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TTutors } from '../AlTutors/TutorCard';

export const TeacherProfile = ({ teacher }: { teacher: TTutors }) => {
  if (!teacher)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-indigo-800 pt-24 pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={teacher?.coverImg || '/default-cover.jpg'}
            alt="Cover"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Picture */}
            <div className="relative h-48 w-48 md:h-56 md:w-56 -mt-16">
              <div className="absolute inset-0 rounded-2xl border-4 border-white shadow-2xl overflow-hidden">
                <Image
                  src={teacher?.profileImg || '/default-avatar.jpg'}
                  alt={teacher?.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Profile Header */}
            <div className="text-white flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">
                    {teacher.name}
                  </h1>
                  <p className="text-blue-100 mt-1">{teacher.email}</p>
                </div>
                {/* <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 border-white/20"
                  >
                    Contact
                  </Button>
                  <Button className="bg-white text-blue-700 hover:bg-blue-50">
                    Message
                  </Button>
                </div> */}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Badge className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {teacher.dateOfBirth}
                </Badge>

                <Badge className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {teacher.gender}
                </Badge>

                {teacher.bloodGroup && (
                  <Badge className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.625 2.655A1 1 0 017.54 2h4.92a1 1 0 01.915.655l1.318 2.88a1 1 0 01-.03 1.011l-5.918 8.915a1 1 0 01-1.66 0L5.338 6.546a1 1 0 01-.03-1.011l1.317-2.88zM10 14a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {teacher.bloodGroup}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
              Contact Information
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Phone Number
                  </h3>
                  <p className="text-gray-800 font-medium">
                    {teacher.contactNo}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-red-100 p-2 rounded-lg">
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Emergency Contact
                  </h3>
                  <p className="text-gray-800 font-medium">
                    {teacher.emergencyContactNo}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Email Address
                  </h3>
                  <p className="text-gray-800 font-medium">{teacher.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Personal Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Full Name
                  </h3>
                  <p className="text-gray-800">{teacher.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Gender
                  </h3>
                  <p className="text-gray-800">{teacher.gender}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Date of Birth
                  </h3>
                  <p className="text-gray-800">{teacher.dateOfBirth}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Blood Group
                  </h3>
                  <p className="text-gray-800">{teacher.bloodGroup}</p>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Address Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Present Address
                  </h3>
                  <p className="text-gray-800">{teacher.presentAddress}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Permanent Address
                  </h3>
                  <p className="text-gray-800">{teacher.permanentAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
