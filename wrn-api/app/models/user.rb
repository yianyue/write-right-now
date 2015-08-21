class User < ActiveRecord::Base

  has_many :entries, dependent: :delete_all

  validates :name, presence: true
  validates :goal, numericality: { only_integer: true, greater_than: 0 }


end

