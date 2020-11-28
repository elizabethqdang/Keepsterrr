# == Schema Information
#
# Table name: list_items
#
#  id         :bigint           not null, primary key
#  note_id    :integer          not null
#  list_id    :integer          not null
#  owner_id   :integer          not null
#  item       :string           not null
#  completed  :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class ListItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
