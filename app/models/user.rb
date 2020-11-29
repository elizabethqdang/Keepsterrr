# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
	attr_reader	:password
	
	validates	:email, :password_digest, :session_token, presence: true
	validates	:email, :session_token, uniqueness: true
	validates :password, length: { allow_nil: true, minimum: 6 }
	
	before_validation	:ensure_session_token

	has_many :notes,
		foreign_key: :owner_id,
		class_name: :Note,
		dependent: :destroy
		
	has_many :pinned_notes,
		through: :notes,
		source: :pinnedNotes
		
	has_many :lists,
		through: :notes,
		source: :lists
	
	has_many :list_items,
		through: :list,
		source: :list_items
	
	def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		return user if user && user.is_password?(password)
		nil
		
		# return nil unless user
		# user.valid_password?(password) ? user : nil
	end
	
	def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
	end
	
	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end
	
	def valid_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end
	
	def ensure_session_token
		self.session_token ||= SecureRandom.urlsafe_base64(16)
	end
	
	def reset_session_token!
		self.session_token = SecureRandom.urlsafe_base64(16)
		self.save!
		return self.session_token
	end
	
end
