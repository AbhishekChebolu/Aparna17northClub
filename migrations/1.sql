
CREATE TABLE members (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL UNIQUE,
  member_id TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  profile_image_url TEXT,
  date_of_birth DATE,
  membership_class TEXT,
  membership_start_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE member_dependencies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  member_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  relationship TEXT NOT NULL,
  date_of_birth DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_members_user_id ON members(user_id);
CREATE INDEX idx_members_member_id ON members(member_id);
CREATE INDEX idx_member_dependencies_member_id ON member_dependencies(member_id);
