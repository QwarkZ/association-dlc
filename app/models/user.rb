class User < ApplicationRecord

  # after_create :send_welcome_email
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # belongs_to :association
  belongs_to :my_association, class_name: "Association", foreign_key: "association_id"
  has_many :harvesters
  has_many :favorites
  has_many :distributions
  validates :first_name, :last_name, :address, :zipcode, :city, presence: true
  validates :email, presence: true, uniqueness: true
  geocoded_by :full_address
  after_validation :geocode, if: :will_save_change_to_address?

  def full_address
  [address, zipcode, city].compact.join(' ')
  end

  def send_emergency_email
    UserMailer.with(user: self).emergency.deliver_now
  end

end
