class User < ApplicationRecord
	attr_reader	:password
	
	before_validation	:ensure_session_token
	
	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end
	
	def ensure_session_token
		self.session_token ||= SecureRandom.urlsafe_base64(16)
	end
	
	def reset_session_token
		self.session_token = SecureRandom.urlsafe_base64(16)
		self.save!
		self.session_token
	end
end
