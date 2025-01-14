import React from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { formatDistanceToNow, differenceInYears, format } from 'date-fns';

const AuthorCard = ({ imgSrc, username, date, bio, email, isAdmin }) => {
    const formatDate = (date) => {
        const parsedDate = new Date(date);
        const yearsDifference = differenceInYears(new Date(), parsedDate);

        if (yearsDifference >= 1) {
            return format(parsedDate, 'MMMM d, yyyy'); // Display exact date
        } else {
            return formatDistanceToNow(parsedDate, { addSuffix: true }); // Relative date
        }
    };
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <a className="flex flex-row items-center mb-4" href={`/author/${username}`}>
                <div className="basis-1/5 text-center">
                    <img
                        alt={username}
                        src={imgSrc}
                        width={16}
                        height={16}
                        className="w-16 h-16 rounded-full mx-auto"
                    />
                </div>
                <div className="basis-4/5">
                    <h2 className="text-2xl font-bold">{username}</h2>
                    <p className="text-sm text-gray-400">Joined: {formatDate(date)}</p>
                    {email && (
                        <p className="text-sm text-gray-400">Email: {email}</p>
                    )}
                    {isAdmin && (
                        <div className="flex items-center mt-2 align-center text-green-400">
                            <MdOutlineAdminPanelSettings
                                className="w-5 h-5 mr-2"
                            />
                            <p className="text-sm text-green-500 font-semibold">Administrator</p>
                        </div>
                    )}
                </div>
            </a>
            <p className="text-gray-300">{bio}</p>
        </div>
    )
}

export default AuthorCard