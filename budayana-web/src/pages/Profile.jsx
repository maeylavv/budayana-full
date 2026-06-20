import "./Profile.css"
import { authClient } from "../lib/auth-client"

export default function Profile() {
  const { data: session } = authClient.useSession()
  const user = session?.user

  const displayedPassword = "••••••••"

  return (
    <>
      <h1 className='data-info'>*Data tidak bisa diganti</h1>

      <div className='form_profile'>
        <section className='profile-form'>
          <div className='profile-field'>
            <label>Nama</label>
            <input type='text' value={user.name ?? ""} readOnly />
          </div>

          {user.role === "STUDENT" && (
            <>
              <div className='profile-field'>
                <label>Kelas</label>
                <input type='text' value={user.grade ?? ""} readOnly />
              </div>

              <div className='profile-field'>
                <label>Label Kelas</label>
                <input type='text' value={user.classLabel ?? ""} readOnly />
              </div>

              <div className='profile-field'>
                <label>Jenis Kelamin</label>
                <input type='text' value={user.gender ?? ""} readOnly />
              </div>
            </>
          )}

          {user.role === "TEACHER" && (
            <div className='profile-field'>
              <label>Guru Kelas</label>
              <input type='text' value={user.grade ?? ""} readOnly />
            </div>
          )}

          <div className='profile-field'>
            <label>Username</label>
            <input type='text' value={user.username ?? ""} readOnly />
          </div>

          <div className='profile-field profile-password-row'>
            <label>Password</label>
            <div className='profile-password-wrapper'>
              <input type='text' value={displayedPassword} readOnly />
            </div>
          </div>

          {user.role === "STUDENT" && (
            <div className='profile-field'>
              <label>Email Wali</label>
              <input
                type='text'
                value={user.guardianEmail ?? user.email ?? ""}
                readOnly
              />
            </div>
          )}
        </section>
      </div>
    </>
  )
}
