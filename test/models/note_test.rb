# == Schema Information
#
# Table name: notes
#
#  id         :bigint           not null, primary key
#  title      :string
#  body       :string
#  owner_id   :integer          not null
#  pinned     :boolean          default(FALSE), not null
#  list       :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class NoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
