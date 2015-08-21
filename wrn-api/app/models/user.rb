class User < ActiveRecord::Base

  has_many :entries, dependent: :delete_all
  
  has_secure_password

  validates :email, :firstname, :lastname, presence: true
  validates :password, length: { in: 6..20 }, on: :create

end
