'use client';

import { makePayment } from '@/services/Bookings';
import React from 'react';

const StudentBooking = ({ bookings }: any) => {
  const handleMakePayment = async (id: string) => {
    try {
      const res = await makePayment(id);
      if (res.url) {
        window.location.href = res.url;
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Your Bookings
        </h1>
        <p className="mt-1 text-gray-500">
          Review and manage your scheduled sessions
        </p>
      </div>

      {Array.isArray(bookings) && bookings.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-medium text-gray-600"
                >
                  Subject
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-medium text-gray-600"
                >
                  Teacher
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-medium text-gray-600"
                >
                  Date & Time
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-medium text-gray-600"
                >
                  Duration
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-medium text-gray-600"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-medium text-gray-600"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-right text-sm font-medium text-gray-600"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bookings.map((booking: any) => (
                <tr
                  key={booking._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-9 w-9 flex-shrink-0 bg-blue-50 flex items-center justify-center rounded">
                        <span className="text-blue-600 font-medium">
                          {booking.subject.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="ml-3">
                        <div className="font-medium text-gray-800">
                          {booking.subject}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-gray-700">
                    {booking.teacher || 'N/A'}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{booking.date}</div>
                    <div className="text-gray-500 text-sm">
                      {booking.timeSlot}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-gray-700">
                    {booking.duration}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap font-medium text-gray-800">
                    ${booking.price}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${
                        booking.status === 'confirmed'
                          ? 'bg-green-50 text-green-700'
                          : booking.status === 'pending'
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-purple-50 text-purple-700'
                      }`}
                    >
                      {booking.status.charAt(0).toUpperCase() +
                        booking.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {booking.status === 'confirmed' && (
                      <button
                        onClick={() => handleMakePayment(booking._id)}
                        className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded text-sm transition-colors"
                      >
                        Pay Now
                      </button>
                    )}
                    {booking.status === 'pending' && (
                      <span className="text-amber-700 bg-amber-50 px-3 py-1.5 rounded text-sm inline-flex items-center">
                        Pending
                      </span>
                    )}
                    {booking.status === 'completed' && (
                      <span className="text-green-700 bg-green-50 px-3 py-1.5 rounded text-sm inline-flex items-center">
                        Completed
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center bg-white p-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <h3 className="mt-3 text-lg font-medium text-gray-800">
            No bookings found
          </h3>
          <p className="mt-1 text-gray-500">
            You don't have any scheduled sessions yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default StudentBooking;
