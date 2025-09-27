import { useState, useEffect, useRef } from "react";
import MainUserActivities from "../component/MainUserActivities";
import Spinner from "../../../components/spinner";

const ITEMS_PER_PAGE = 9;

const UserManagement = ({
  showNewUser,
  setShowNewUser,
  sidebarDisabled,
  setSidebarDisabled,
}) => {
  const [activitiesModalOpen, setActivitiesModalOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(null);
  const menuRef = useRef(null);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterRange, setFilterRange] = useState("today");
  const [currentPage, setCurrentPage] = useState(1);

  const [modalType, setModalType] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const [toast, setToast] = useState(null);

  // Simulate API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const names = [
          "Aisha Dasuki",
          "Zainab Muhammda",
          "Khalid Rabiu",
          "Abbas Muhammad Rabiu Dederi",
          "Dr. Nura Isa",
          "Olivia Pam",
        ];

        // just to demosntrate loading state
        // await new Promise((resolve) => setTimeout(resolve, 500));

        const data = [...Array(25)].map((_, i) => ({
          id: i,
          name: names[i % names.length],
          email: `user${i}@gmail.com`,
          role: i % 2 === 0 ? "Lab technician" : "Receptionist",
          phone: `09099999${(100 + i).toString().slice(-3)}`,
          lastLogin: "16, Jun 2025 - 11:00 AM",
          status:
            i % 3 === 0 ? "Active" : i % 3 === 1 ? "Deactivated" : "Pending",
        }));

        setUsers(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".menu-toggle")
      ) {
        setMenuOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    showToast("User deleted successfully", "success");
    setModalType(null);
  };

  const handleDeactivateUser = (id) => {
    setUsers(
      users.map((u) => (u.id === id ? { ...u, status: "Deactivated" } : u))
    );
    showToast("User deactivated successfully", "success");
    setModalType(null);
  };

  const handleReactivateUser = (id) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, status: "Active" } : u)));
    showToast("User reactivated successfully", "success");
    setModalType(null);
  };

  const handleEditUser = (updatedUser) => {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    showToast("User updated successfully", "success");
    setModalType(null);
  };

  const handleRevokeUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    showToast("User revoked successfully", "success");
    setModalType(null);
  };

  return (
    <div className="flex w-full relative">
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-4 right-4 flex w-[420px] p-4 items-start gap-4 rounded-lg z-50 transition-all duration-300 transform-gpu ${
            toast.type === "success" ? "bg-[#F6FEF9]" : "bg-[#FEF6F6]"
          }`}
          style={{
            boxShadow:
              toast.type === "success"
                ? "0 0 0 4px rgba(83, 180, 131, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08), 0 0 0 1px rgba(83, 180, 131, 0.16), 0 1px 1px 0 rgba(0, 0, 0, 0.12)"
                : "0 0 0 4px rgba(247, 73, 73, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08), 0 0 0 1px rgba(247, 73, 73, 0.16), 0 1px 1px 0 rgba(0, 0, 0, 0.12)",
          }}
        >
          <div className="flex flex-col gap-1 flex-1">
            <h3
              className={`font-inter text-base font-semibold leading-6 ${
                toast.type === "success" ? "text-[#2F9461]" : "text-[#D92D20]"
              }`}
            >
              {toast.type === "success" ? "Success" : "Error"}
            </h3>
            <p
              className={`font-inter text-base font-semibold leading-6 ${
                toast.type === "success" ? "text-[#2F9461]" : "text-[#D92D20]"
              }`}
            >
              {toast.message}
            </p>
          </div>
          <button
            onClick={() => setToast(null)}
            className={`text-lg font-light ${
              toast.type === "success" ? "text-[#2F9461]" : "text-[#D92D20]"
            }`}
          >
            &times;
          </button>
        </div>
      )}

      <div className="flex-1 bg-white pt-8 pb-0 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 relative overflow-x-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-center mt-[5px] sm:mt-0 mb-8 gap-2">
          <h1 className="text-[15px] leading-[16px] sm:text-[24px] sm:leading-[32px] font-semibold text-black font-inter">
            User Management
          </h1>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActivitiesModalOpen(true)}
              className="flex px-3 py-1.5 justify-center items-center gap-2 rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] text-[#000] text-[12px] leading-[16px] sm:text-sm sm:leading-[20px] font-inter font-medium"
            >
              User activities
            </button>

            <button
              className="flex px-3 py-1.5 justify-center items-center gap-2 rounded-lg bg-[#829C15] shadow-inner text-[#fff] text-[12px] leading-[16px] sm:text-sm sm:leading-[20px] font-inter font-medium"
              onClick={() => {
                setShowNewUser(true);
                setSidebarDisabled(true);
              }}
              disabled={sidebarDisabled}
            >
              + New user
            </button>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <div className="flex items-center gap-2 max-w-md w-full px-3 py-1.5 border border-gray-300 rounded-md">
            <input
              type="text"
              placeholder="Search a name or email address"
              className="w-full text-sm placeholder:text-[#9EA5AD] outline-none"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="flex items-center px-3 py-[4.5px] rounded-lg border border-[#E5E7EA] bg-white">
            <select
              className="bg-transparent outline-none text-sm"
              value={filterRange}
              onChange={(e) => setFilterRange(e.target.value)}
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="always">Always</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <section className="bg-white p-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-10">
              <Spinner />
              <p className="mt-3 text-sm text-gray-500">Loading users...</p>
            </div>
          ) : error ? (
            <p className="text-red-500 text-sm">{error}</p>
          ) : (
            <>
              <div className="overflow-x-auto overflow-y-auto max-h-[500px] scrollbar-thin-green">
                <section className="bg-white">
                  <table className="min-w-[850px] text-left text-[10px] text-[#676E76] rounded-sm">
                    <thead>
                      <tr className="text-[#676E76] border-b text-[12px] font-medium leading-[18px] font-inter">
                        <th className="bg-[#FAFAFA] p-5 rounded-tl-lg">Name</th>
                        <th className="bg-[#FAFAFA] p-5">Email</th>
                        <th className="bg-[#FAFAFA] p-5">Role</th>
                        <th className="bg-[#FAFAFA] p-5">Phone</th>
                        <th className="bg-[#FAFAFA] p-5">Last login</th>
                        <th className="bg-[#FAFAFA] p-5 rounded-tr-lg">
                          Status
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {paginatedUsers.map((user, i) => (
                        <tr
                          key={user.id}
                          className="border-b hover:bg-gray-50 relative"
                        >
                          <td
                            className="px-5 py-3 max-w-[140px] truncate"
                            title={user.name}
                          >
                            {user.name}
                          </td>
                          <td
                            className="px-5 py-3 max-w-[180px] truncate"
                            title={user.email}
                          >
                            {user.email}
                          </td>
                          <td
                            className="px-5 py-3 max-w-[140px] truncate"
                            title={user.role}
                          >
                            {user.role}
                          </td>
                          <td
                            className="px-5 py-3 max-w-[120px] truncate"
                            title={user.phone}
                          >
                            {user.phone}
                          </td>
                          <td className="px-5 py-3">{user.lastLogin}</td>
                          <td className="px-5 py-3">
                            <div className="flex items-center justify-between relative">
                              <span
                                className={
                                  user.status === "Active"
                                    ? "text-[#2F9461]"
                                    : user.status === "Deactivated"
                                    ? "text-[#CD3636]"
                                    : "text-[#C8811A]"
                                }
                              >
                                {user.status}
                              </span>
                              <button
                                onClick={() =>
                                  setMenuOpen(menuOpen === i ? null : i)
                                }
                                className="menu-toggle p-1 hover:bg-gray-100 rounded ml-6 text-lg font-bold"
                              >
                                ⋮
                              </button>

                              {menuOpen === i && (
                                <div
                                  ref={menuRef}
                                  className="absolute right-0 top-full mt-2 bg-white border rounded shadow-md z-50 w-40"
                                >
                                  {user.status === "Pending" ? (
                                    <button
                                      onClick={() => {
                                        setSelectedUser(user);
                                        setModalType("revoke");
                                        setMenuOpen(null);
                                      }}
                                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                                    >
                                      Revoke request
                                    </button>
                                  ) : (
                                    <>
                                      <button
                                        onClick={() => {
                                          setSelectedUser(user);
                                          setModalType("edit");
                                          setMenuOpen(null);
                                        }}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                      >
                                        Edit user
                                      </button>
                                      {user.status === "Active" && (
                                        <button
                                          onClick={() => {
                                            setSelectedUser(user);
                                            setModalType("deactivate");
                                            setMenuOpen(null);
                                          }}
                                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                        >
                                          Deactivate user
                                        </button>
                                      )}
                                      {user.status === "Deactivated" && (
                                        <button
                                          onClick={() => {
                                            setSelectedUser(user);
                                            setModalType("reactivate");
                                            setMenuOpen(null);
                                          }}
                                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                        >
                                          Reactivate user
                                        </button>
                                      )}
                                      <button
                                        onClick={() => {
                                          setSelectedUser(user);
                                          setModalType("delete");
                                          setMenuOpen(null);
                                        }}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                                      >
                                        Delete user
                                      </button>
                                    </>
                                  )}
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              </div>

              {/* Pagination controls */}
              <div className="flex justify-between items-center gap-4 mt-6 text-[#454C52] text-sm font-semibold leading-[20px] font-inter">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="px-4 py-1.5 rounded-lg border border-[#E5E7EA] bg-white text-[#454C52] disabled:opacity-50 shadow-sm"
                >
                  Previous
                </button>

                <span>
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="px-4 py-1.5 rounded-lg border border-[#E5E7EA] bg-white text-[#454C52] disabled:opacity-50 shadow-sm"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </section>
      </div>

      {modalType && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {modalType === "edit" && selectedUser && (
            <div className="bg-white p-10 rounded-lg shadow-lg w-[400px]">
              <h2 className="text-[16px] font-semibold leading-6 text-[#596066] mb-4 font-inter">
                Edit user
              </h2>

              <p className="text-[14px] font-normal leading-5 text-[#676E76] mb-8 font-inter">
                You can edit this user to ensure you have his/her updated
                details
              </p>

              {/* Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  handleEditUser({
                    ...selectedUser,
                    name: formData.get("name"),
                    phone: formData.get("phone"),
                    email: formData.get("email"),
                    role: formData.get("role"),
                  });
                }}
              >
                <label className="block text-[14px] font-normal leading-5 text-[#676E76] font-inter mb-2">
                  Name
                </label>
                <input
                  name="name"
                  defaultValue={selectedUser.name}
                  placeholder="Enter name"
                  className="w-full flex items-center gap-2 px-4 py-[10px] rounded-lg border border-[#E5E7EA] bg-white mb-6 font-inter focus:outline-none focus:border-[#829C15]"
                />

                <label className="block text-[14px] font-normal leading-5 text-[#676E76] font-inter mb-1">
                  Phone number
                </label>
                <input
                  name="phone"
                  defaultValue={selectedUser.phone}
                  placeholder="Enter phone"
                  className="w-full flex items-center gap-2 px-4 py-[10px] rounded-lg border border-[#E5E7EA] bg-white mb-6 font-inter focus:outline-none focus:border-[#829C15]"
                />

                <label className="block text-[14px] font-normal leading-5 text-[#676E76] font-inter mb-1">
                  Email address
                </label>
                <input
                  name="email"
                  defaultValue={selectedUser.email}
                  placeholder="Enter email"
                  className="w-full flex items-center gap-2 px-4 py-[10px] rounded-lg border border-[#E5E7EA] bg-white mb-6 font-inter focus:outline-none focus:border-[#829C15]"
                />

                <label className="block text-[14px] font-normal leading-5 text-[#676E76] font-inter mb-1">
                  Role
                </label>
                <select
                  name="role"
                  defaultValue={selectedUser.role}
                  className="w-full flex items-center gap-2 px-4 py-[10px] rounded-lg border border-[#E5E7EA] bg-white mb-6 font-inter focus:outline-none focus:border-[#829C15]"
                >
                  <option>Lab technician</option>
                  <option>Receptionist</option>
                  <option>Radiologist</option>
                </select>

                <div className="flex justify-start gap-2 mt-8">
                  <button
                    type="button"
                    onClick={() => setModalType(null)}
                    className="flex items-center justify-center px-3 py-1.5 gap-2 rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] text-[#000] text-[14px] font-medium leading-5 font-inter"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-lg text-white text-[14px] font-medium leading-5 font-inter bg-[#829C15] shadow-[1px_1px_2px_1px_rgba(255,255,255,0.18)_inset,-1px_-1px_2px_1px_rgba(255,255,255,0.18)_inset]"
                  >
                    Update user
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Delete Modal */}
          {modalType === "delete" && selectedUser && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div
                className="
        bg-white p-6 sm:p-10 rounded-lg shadow-lg 
        w-full max-w-[400px] mx-4
      "
              >
                <h2 className="text-[16px] font-semibold leading-6 text-[#596066] mb-4 font-inter">
                  Permanently delete this user?
                </h2>

                <p className="text-[14px] font-normal leading-5 text-[#676E76] mb-10 font-inter">
                  This action cannot be undone. Deleting a user will remove all
                  login access. Past activities performed by this user will
                  remain in system logs.
                </p>

                {/* Buttons */}
                <div className="flex justify-start gap-2 mt-2">
                  <button
                    onClick={() => setModalType(null)}
                    className="flex items-start justify-center px-3 py-1.5 gap-2 rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] text-[#000] text-[14px] font-medium leading-5 font-inter"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => handleDeleteUser(selectedUser.id)}
                    className="flex items-center justify-center px-3 py-1.5 gap-2 rounded-lg text-white text-[14px] font-medium leading-5 font-inter bg-[#CD3636] shadow-[1px_1px_2px_1px_rgba(255,255,255,0.18)_inset,-1px_-1px_2px_1px_rgba(255,255,255,0.18)_inset]"
                  >
                    Delete user
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Deactivate Modal */}
          {modalType === "deactivate" && selectedUser && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg w-full max-w-[400px] mx-4">
                <h2 className="text-[16px] font-semibold leading-6 text-[#596066] mb-4 font-inter">
                  Deactivate this user?
                </h2>

                <p className="text-[14px] font-normal leading-5 text-[#676E76] mb-10 font-inter">
                  The user will no longer be able to log in or perform any
                  actions. You can reactivate them later from this panel.
                </p>

                <div className="flex justify-start gap-2 mt-2">
                  <button
                    onClick={() => setModalType(null)}
                    className="flex items-start justify-center px-3 py-1.5 gap-2 rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] text-[#000] text-[14px] font-medium leading-5 font-inter"
                  >
                    Cancel
                  </button>

                  {/* Deactivate */}
                  <button
                    onClick={() => handleDeactivateUser(selectedUser.id)}
                    className="flex items-center justify-center px-3 py-1.5 gap-2 rounded-lg text-white text-[14px] font-medium leading-5 font-inter bg-[#CD3636] shadow-[1px_1px_2px_1px_rgba(255,255,255,0.18)_inset,-1px_-1px_2px_1px_rgba(255,255,255,0.18)_inset]"
                  >
                    Deactivate
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Reactivate Modal */}
          {modalType === "reactivate" && selectedUser && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg w-full max-w-[400px] mx-4">
                <h2 className="text-[16px] font-semibold leading-6 text-[#596066] mb-4 font-inter">
                  Reactivate this user?
                </h2>

                <p className="text-[14px] font-normal leading-5 text-[#676E76] mb-10 font-inter">
                  The user will now be able to log in or perform any action. You
                  can deactivate them later from this panel.
                </p>

                {/* Buttons */}
                <div className="flex justify-start gap-2 mt-2">
                  <button
                    onClick={() => setModalType(null)}
                    className="flex items-start justify-center px-3 py-1.5 gap-2 rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] text-[#000] text-[14px] font-medium leading-5 font-inter"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => handleReactivateUser(selectedUser.id)}
                    className="flex items-center justify-center px-3 py-1.5 gap-2 rounded-lg text-white text-[14px] font-medium leading-5 font-inter bg-[#829C15] shadow-[1px_1px_2px_1px_rgba(255,255,255,0.18)_inset,-1px_-1px_2px_1px_rgba(255,255,255,0.18)_inset]"
                  >
                    Reactivate
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Revoke Modal */}
          {modalType === "revoke" && selectedUser && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg w-full max-w-[400px] mx-4">
                <h2 className="text-[16px] font-semibold leading-6 text-[#596066] mb-4 font-inter">
                  Revoke this user?
                </h2>

                <p className="text-[14px] font-normal leading-5 text-[#676E76] mb-10 font-inter">
                  This user has not yet activated their staff account. Revoking
                  will prevent them from completing their setup, and their staff
                  details will be removed from the system.
                </p>

                {/* Buttons */}
                <div className="flex justify-start gap-2 mt-2">
                  <button
                    onClick={() => setModalType(null)}
                    className="flex items-start justify-center px-3 py-1.5 gap-2 rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] text-[#000] text-[14px] font-medium leading-5 font-inter"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => handleRevokeUser(selectedUser.id)}
                    className="flex items-center justify-center px-3 py-1.5 gap-2 rounded-lg text-white text-[14px] font-medium leading-5 font-inter bg-[#CD3636] shadow-[1px_1px_2px_1px_rgba(255,255,255,0.18)_inset,-1px_-1px_2px_1px_rgba(255,255,255,0.18)_inset]"
                  >
                    Revoke
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <MainUserActivities
        isOpen={activitiesModalOpen}
        onClose={() => setActivitiesModalOpen(false)}
      />
    </div>
  );
};

export default UserManagement;
