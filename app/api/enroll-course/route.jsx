import { db } from "@/config/db";
import { coursesTable, enrollCoursesTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { courseId } = await req.json();
  const user = await currentUser();
  //if course is already enrolled, return error

  const enrollCourses = await db
    .select()
    .from(enrollCoursesTable)
    .where(
      and(
        eq(
          enrollCoursesTable.userEmail,
          user?.primaryEmailAddress.emailAddress
        ),
        eq(enrollCoursesTable.cid, courseId)
      )
    );
  if (enrollCourses?.length == 0) {
    const result = await db
      .insert(enrollCoursesTable)
      .values({
        cid: courseId,
        userEmail: user?.primaryEmailAddress.emailAddress,
      })
      .returning(enrollCoursesTable);
    return NextResponse.json(result);
  }
  return NextResponse.json({ resp: "Course already enrolled" });
}

export async function GET(req) {
  const user = await currentUser();
  const { searchParams } = new URL(req.url);
  const courseId = searchParams?.get("courseId");

  if (courseId) {
    const result = await db
      .select()
      .from(coursesTable)
      .innerJoin(
        enrollCoursesTable,
        eq(coursesTable.cid, enrollCoursesTable.cid)
      )
      .where(
        and(
          eq(
            enrollCoursesTable.userEmail,
            user?.primaryEmailAddress.emailAddress
          ),
          eq(enrollCoursesTable.cid, courseId)
        )
      )
      .orderBy(desc(enrollCoursesTable.id));
    return NextResponse.json(result[0]);
  } else {
    const result = await db
      .select()
      .from(coursesTable)
      .innerJoin(
        enrollCoursesTable,
        eq(coursesTable.cid, enrollCoursesTable.cid)
      )
      .where(
        eq(enrollCoursesTable.userEmail, user?.primaryEmailAddress.emailAddress)
      )
      .orderBy(desc(enrollCoursesTable.id));

    return NextResponse.json(result);
  }
}

export async function PUT(req) {
  const { completedChapter, courseId } = await req.json();
  const user = await currentUser();
  const result = await db
    .update(enrollCoursesTable)
    .set({
      completedChapters: completedChapter,
    })
    .where(
      and(
        eq(enrollCoursesTable.cid, courseId),
        eq(
          enrollCoursesTable.userEmail,
          user?.primaryEmailAddress?.emailAddress
        )
      )
    )
    .returning(enrollCoursesTable);

  return NextResponse.json(result);
}
