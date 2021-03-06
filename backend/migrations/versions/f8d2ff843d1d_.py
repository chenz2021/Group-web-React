"""empty message

Revision ID: f8d2ff843d1d
Revises: 0ffb2c4cbceb
Create Date: 2022-02-07 21:38:58.314109

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f8d2ff843d1d'
down_revision = '0ffb2c4cbceb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('publication', sa.Column('cover', sa.String(), nullable=True))
    op.drop_column('publication', 'is_cover')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('publication', sa.Column('is_cover', sa.BOOLEAN(), autoincrement=False, nullable=True))
    op.drop_column('publication', 'cover')
    # ### end Alembic commands ###
